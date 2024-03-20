import { Request, Response, Router } from "express";
import { insertEvent } from "../services/track.service";

const router = Router();
const route = "/track";

router.post("", async (req: Request, res: Response) => {
  const events = req.body;
  const result = await insertEvent(events);
  if (result) {
    res.sendStatus(200);
  } else {
    res.sendStatus(422);
  }
});

export { route, router };
