import express from "express";
const router = express.Router();

router.post("/api/data", (req, res) => {
  const { email, password } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({
      success: false,
      message: "Email format is invalid"
    });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Data validated successfully"
  });
});

export default router;
