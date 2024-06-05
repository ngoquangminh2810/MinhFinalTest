import {useEffect, useState} from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import Card from 'react-bootstrap/Card';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function FilmList(props) {
    const currentPage2 = props.currentPage2;
    console.log("currentPage2")
    console.log(currentPage2)

    const [listFilm, setListFilm] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [listTotalPage, setListTotalPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    let listTotalPage2 = [];

    let navigate = useNavigate();


    useEffect(() => {
        console.log(7)
        const fetchData = async () => {
            let result = null;
            if (currentPage2 != null) {
                result = await axios.get("http://localhost:8080/film?currentPage=" + currentPage2);
            } else {
                result = await axios.get("http://localhost:8080/film");
            }

            console.log("result")
            console.log(result)
            setListFilm(result.data.film);
            setTotalPage(result.data.totalPage);
            setCurrentPage(result.data.currentPage);

            let listTotalPageTmp = [];
            for (let i = 0; i < totalPage; i++) {
                listTotalPageTmp.push(i + 1);
            }
            setListTotalPage(listTotalPageTmp);
        }

        fetchData();
    }, []);

    const next = () => {
        let nextPage = currentPage + 1;
        window.location.href = "http://localhost:3000/filmSearch?currentPage=" + nextPage;
    }
    const previous = () => {
        let prePage = currentPage - 1;
        window.location.href = "http://localhost:3000/filmSearch?currentPage=" + prePage;
    }

    return (
        <div className="container">
            <div>
                <nav id="nav-bar" className="navbar navbar-expand-lg bg-body-tertiary">
                    <button type="button" class="btn btn-outline-none"><GiHamburgerMenu /></button>
                    <h4>Movies</h4>
                    <button type="button" class="btn btn-outline-none"><IoSearch />
                    </button>
                    </nav>
                <div className="list-group">
                    {
                        listFilm.map((value, i) => {
                            return (
                                <div className="card-film" key={i}>
                                    <Card style={{ width: '200px', height:'425px' }}>
                                        <Card.Img style={{width:'199px', height:'300px'}} variant="top" src={value.image} />
                                        <Card.Body>
                                            <Card.Title>{value.name}</Card.Title>
                                            <Card.Text>
                                                {value.time}p {value.year}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ul className="pagination pagination-sm">
                <li className="page-item"><a className="page-link" onClick={() => previous()}>Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
                <li className="page-item"><button className="page-link" onClick={() => next()}>Next</button></li>
            </ul>
        </div>
    )
}

export default FilmList;