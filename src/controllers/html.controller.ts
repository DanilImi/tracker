import { Request, Response, Router } from "express";
import { getHtml } from "../services/html.service";

const router = Router();
const route = ["/1.html", "/2.html", "/3.html"];

router.get("", async (req: Request, res: Response) => {
  const html = await getHtml();
  if (html) {
    res.sendFile(html);
  } else {
    res.sendStatus(422);
  }
});

export { route, router };
