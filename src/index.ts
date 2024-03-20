import cors from "cors";
import express from "express";
import { connectDB } from "./config/db.config";
import registerRoutes from "./routes/register-routes";
import registerRoutesHtml from "./routes/register-routes-html";

const app = express();
const htmlServer = express();
htmlServer.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8888;
const portHtml = process.env.PORT_HTML || 50000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/tracks";

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

registerRoutes(app);
registerRoutesHtml(htmlServer);

const startServer = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

const startServerHtml = async () => {
  try {
    htmlServer.listen(portHtml, () => {
      console.log(`Server html is listening on port ${portHtml}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
startServerHtml();
