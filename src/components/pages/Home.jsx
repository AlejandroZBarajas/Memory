import Board from "../organism/Board"
import "./Home.css"

function Home(){
    return(
        <div id="homeContainer">
            <h1>Memorama</h1>
            <Board/>
        </div>
    )
}

export default Home