import dotenv from "dotenv";
import FilmModel from "../model/FilmModel.js";

dotenv.config()
const FilmController = {
    getAll: async (req, res) =>{
        let {currentPage, size} = req.query
        if (!currentPage){
            currentPage = process.env.CURRENT_PAGE
        }
        if (!size){
            size = process.env.SIZE
        }
        const currentPageNum = Number(currentPage)

        const totalSize = await FilmModel.countDocuments()
        const totalPage = Math.ceil(totalSize/size)
        const skip = (currentPageNum -1) * size

        const film = await FilmModel.find()
            .skip(skip)
            .limit(size);

        res.status(200).send({
            film,
            currentPage: currentPageNum
        })
    },
    addFilm: async (req, res) => {
        const {ID, name, time, year, image, introduce} = req.body
        const newFilm = await FilmModel.create({
            ID: ID,
            name: name,
            time: time,
            year: year,
            image: image,
            introduce: introduce
        })
        res.status(200).send({
            message: "Add Film Success",
            data: newFilm
        })
    },
    delete: async (req, res) =>{
    const {id} = req.param
        await FilmModel.findByIdAndDelete(id)
        res.status(200).send({
            message: "Delete success"
        })
    },
    update: async (req, res) =>{
        const {id} = req.param
        const updateFilm = req.body
        await FilmModel.findByIdAndUpdate(id,updateFilm)
        res.status(200).send({
            message: "Update success"
        })
    },
    find: async (req, res) => {
        const {search} = req.query
        const condition = {'name': {$regex:search, $options: 'i'}}
        const result = await FilmModel.find(condition)
        res.status(200).send({
            data: result
        })
    }
}

export default FilmController