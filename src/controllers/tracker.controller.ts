import { Request, Response, Router } from "express";
import { getTracker } from "../services/tracker.service";

const router = Router();
const route = "/tracker";

router.get("", async (req: Request, res: Response) => {
  const result = await getTracker();
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(422);
  }
});

export { route, router };
