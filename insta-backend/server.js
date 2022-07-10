import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Pusher from "pusher";
import dbModel from "./dbModel.js";

// App config
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url = "mongodb+srv://admin:YucnROjg40T4B52X@cluster0.if4gf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
	console.log("DB connected");
});

// API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/upload", (req, res) => {
	const body = req.body;

	dbModel.create(body, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});


app.get("/sync", (req, res) => {
	dbModel.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));