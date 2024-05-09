import express from "express";
import "dotenv/config";
import { router } from "./routes";
import { appErrors } from "./errors/appErrors";
import { pageNotFoundError } from "./errors/pageNotFoundError";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(router);

app.use(pageNotFoundError)
app.use(appErrors);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});