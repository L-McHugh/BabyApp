import router from "./routes/baby_routes.js";
import feedingRouter from "./routes/feeding_routes.js";
import nappiesRouter from "./routes/nappies_routes.js";

import express from "express";
import morgan from "morgan";

import cors from 'cors'
const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
//app.use(express.static("public"));

app.use("/api/baby", router);
app.use("/api/nappies", nappiesRouter);
app.use("/api/feeding", feedingRouter);

app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
  });

export default app;

