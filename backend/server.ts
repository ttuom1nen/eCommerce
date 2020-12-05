import express, { Router, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

import enforce from "express-sslify";

// loads .env file
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // __dirname is part of node.js, it is the current directory
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port: ", port);
});

app.get("/service-worker.js", (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req: Request, res: Response) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  res.status(200).send({ success: body });

  console.log(`Payment: ${JSON.stringify(body)}`);
});
