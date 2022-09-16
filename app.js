import express from "express";

import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";


import router from "./routes/user-routes";

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose

    .connect('mongodb+srv://admin:vvmI7pMR6cWwBAS8@cluster0.qbps9s3.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(6000))
    .then(() => console.log("connected to database and listening to localhost 6000"))
    .catch((err) => console.log(err));

// app.listen(5000);
//vvmI7pMR6cWwBAS8