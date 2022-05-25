export default function Middleware(req: any, res: any, next: any) {
  const jwt = require("jsonwebtoken");
  const authHeader = req.headers["authorization"];
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = jwt.verify(
      authHeader.slice(7, authHeader.length),
      process.env.JWT_SECRET,
      (err: any, decoded: any) => {
        return decoded
      }
    );
    if (token) {
      return next()
    }
  }
  res.status(403).send({
    message: "Invalid token",
  });
}
