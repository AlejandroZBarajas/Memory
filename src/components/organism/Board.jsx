import Card from "../molecule/Card";
import ogArray from "../../data/Array"

import "./Board.css"

function Board(props){
    return(
        <div id="boardContainer">
            <h1>entra en board</h1>
            {
            ogArray.card.map(card=><Card Title={props.title} Image={props.image}></Card>)
            }
            <h2>renderiza</h2>
        </div>
    )
}

export default Board