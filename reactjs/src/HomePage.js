import FilmList from "./FilmList";
import {useSearchParams} from "react-router-dom";


function HomePage() {
    const [searchParams] = useSearchParams();
    return (
        <div>
            <FilmList currentPage2={searchParams.get("currentPage")} />
        </div>
    )
}

export default HomePage;