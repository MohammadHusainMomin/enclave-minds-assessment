import express from "express";
import secureRoute from "./routes/secureData.route.js";
import { notFoundHandler, errorHandler } from "./middleware/globalError.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(secureRoute);

// 404 handler
app.use(notFoundHandler);

// 500 handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
