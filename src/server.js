import "./db";
import "./models/video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
const PORT = 5000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine","pug");
app.set("views",process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true }));
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/user",userRouter);

// Codesandbox gives us a PORT :)
app.listen(PORT, () => `Listening!✅`);