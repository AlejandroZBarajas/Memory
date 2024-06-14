import Board from "../organism/Board"
import "./Home.css"

function Home(){
    return(
        <div id="homeContainer">
            <h1 id="pageTitle">Randomrama</h1>
            <Board/>
        </div>
    )
}

export default Home