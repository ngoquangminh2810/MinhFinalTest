import express from "express"
import dotenv from "dotenv"
import TokenController from "./Token/TokenController.js";
import mongoose from "mongoose";
import MiddleWare from "./middleware/MiddleWare.js";
import AccountController from "./controller/AccountController.js";
import FilmController from "./controller/FilmController.js";
import cors from "cors";

const app = express()


app.use(express.json())

const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));

dotenv.config()
const PORT = process.env.PORT
const DATABASE_NAME = process.env.DATABASE_NAME
mongoose.connect("mongodb://localhost:27017/" + DATABASE_NAME)

app.listen(PORT, () => {
    console.log("Sever is running...")
})
//Login-Register
app.post("/login", MiddleWare.login, AccountController.login)
app.post("/register", MiddleWare.registerAccount, AccountController.registerAccount)
//film
app.get("/film", FilmController.getAll)
app.post("/addFilm", FilmController.addFilm)
app.delete("/film", FilmController.delete)
app.put("/film", FilmController.update)
app.get("/findFilm", FilmController.find)

app.post("/genToken", TokenController.genToken)
app.post("/checkToken", TokenController.checkToken)