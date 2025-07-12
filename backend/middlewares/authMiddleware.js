import jwt from "jsonwebtoken";

export const authMiddleware = (roles = []) => (req, res, next) => {
  console.log("Auth Middleware Hit");
  console.log("Cookies:", req.cookies);

  try {
    const token = req.cookies.jwt;
    if (!token) {
      console.log("No JWT token found in cookies");
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT verification failed:", err.message);
        return res.status(403).json({ message: "Forbidden" });
      }

      req.user = decoded;
      console.log("Decoded JWT:", decoded);

      if (roles.length && !roles.includes(req.user.role)) {
        console.log("Access denied for role:", req.user.role);
        return res.status(403).json({ message: "Access Denied" });
      }

      next(); // Ensure this is always called
    });
  } catch (error) {
    console.error("Error in authMiddleware:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
