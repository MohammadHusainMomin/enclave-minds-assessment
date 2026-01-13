export const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
    timestamp: new Date().toISOString()
  });
};

export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message || "Internal server error",
    timestamp: new Date().toISOString()
  });
};
