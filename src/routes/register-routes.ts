import { Express } from "express";

import {
  route as trackRoute,
  router as trackRouter,
} from "../controllers/track.controller";

import {
  route as trackerRoute,
  router as trackerRouter,
} from "../controllers/tracker.controller";

const registerRoutes = (app: Express) => {
  app.use(trackRoute, trackRouter);
  app.use(trackerRoute, trackerRouter);
};

export default registerRoutes;
