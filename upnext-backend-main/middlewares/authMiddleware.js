import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
<<<<<<< HEAD

  const superUser = req.headers['spuser-key'];
  if (superUser && superUser === process.env.SUPERUSER_SECRET) {
    req.user = { role: 'superuser'};
    return next();
  }

  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token' });
=======
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  console.log("🔒 Token diterima:", token);

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.userId) {
      return res.status(401).json({ message: "User ID tidak ditemukan di token" });
    }

    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    console.error("❌ Token invalid:", err.message);
    return res.status(403).json({ message: "Invalid token" });
>>>>>>> 33bad2c50b109313b87a695b7031de85c2a8d01f
  }
};
