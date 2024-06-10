import Card from "../molecule/Card";
import ogArray from "../../data/Array"

import "./Board.css"

function Board(props){
    return(
        <div id="boardCss">
            {
            ogArray.card.map(card=><Card image={card.image} title={card.title} ></Card>)
            }
        </div>
    )
}

export default Board