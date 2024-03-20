import { Express } from "express";

import {
  route as htmlRoute,
  router as htmlRouter,
} from "../controllers/html.controller";

const registerRoutesHtml = (app: Express) => {
  app.use(htmlRoute, htmlRouter);
};

export default registerRoutesHtml;
