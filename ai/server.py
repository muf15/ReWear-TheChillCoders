from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import BlipProcessor, BlipForConditionalGeneration
from anthropic import Anthropic
from PIL import Image
import io
import os
import spacy
from dotenv import load_dotenv
load_dotenv()
KEY = os.getenv("anthropic_key")

client = Anthropic(api_key=KEY)

app = Flask(__name__)
CORS(app)

# Load BLIP model and processor
print("🔄 Loading BLIP model...")
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")
print("✅ Model loaded.")

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

def enhance_with_claude(caption):
    try:
        prompt = (
    
    "You are given a raw image description of a fashion product. "
    "Rewrite it concisely for an re-selling e-commerce listing. "
    "fromt he caption you will get the idea of gender mention that in your description"
    "Focus only on the clothing item,its color, pattern,style and avoid titles, exaggeration, or unnecessary fluff. "
    f"Description: \"{caption}\"\n\n"
    "Output only one clean, elegant sentence suitable for a product listing."
)

        response = client.messages.create(
            model="claude-3-haiku-20240307",
            max_tokens=100,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )
        return response.content[0].text.strip()

    except Exception as e:
        print("❌ Claude API error:", e)
        return caption  # fallback


@app.route('/caption', methods=['POST'])
def generate_caption():
    if 'image' not in request.files:
        return jsonify({'error': 'Image file is missing'}), 400

    image_file = request.files['image']
    try:
        image = Image.open(io.BytesIO(image_file.read())).convert('RGB')
        inputs = processor(images=image, return_tensors="pt")
        output = model.generate(**inputs)
        caption = processor.decode(output[0], skip_special_tokens=True)
        return jsonify({'caption': caption})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/fashion-caption', methods=['POST'])
def fashion_caption():
    if 'image' not in request.files:
        return jsonify({'error': 'Image file is missing'}), 400

    try:
        image_file = request.files['image']
        image = Image.open(io.BytesIO(image_file.read())).convert('RGB')

        # Generate raw caption
        inputs = processor(images=image, return_tensors="pt")
        output = model.generate(**inputs)
        raw_caption = processor.decode(output[0], skip_special_tokens=True)

        # Enhance caption with Claude
        enhanced_caption = enhance_with_claude(raw_caption)

        # Extract keywords
        fashion_dict = {
            "types": ["dress", "top", "shirt", "skirt", "denim", "coat", "lehenga", "kurta", "blouse", "jeans", "jacket", "saree"],
            "colors": ["white", "black", "red", "blue", "green", "yellow", "beige", "pink", "maroon", "orange", "purple"],
            "patterns": ["floral", "striped", "plain", "checked", "polka dot", "embroidered", "graphic", "solid"]
        }

        doc = nlp(enhanced_caption.lower())
        keywords = set()

        for token in doc:
            for group in fashion_dict.values():
                if token.text in group:
                    keywords.add(token.text)

        return jsonify({
            'description': enhanced_caption,
            'keywords': list(keywords)[:5]
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("🚀 Starting Flask server on http://localhost:5000")
    app.run(host="0.0.0.0", port=5000, debug=True)
