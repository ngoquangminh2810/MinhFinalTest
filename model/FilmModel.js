import mongoose from "mongoose";

const obj = {
    ID: Number,
    name: String,
    time: Number,
    year: Number,
    image: String,
    introduce: String,
}
const FilmSchema = new mongoose.Schema(obj);

const FilmModel = mongoose.model("film", FilmSchema, "film")

export default FilmModel