import Card from "../molecule/Card";
import ogArray from "../../data/Array";

import "./Board.css";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Board(props) {

    const duplicatedCards = ogArray.card.flatMap((card, index) => ([
        { ...card, id: `${index}-1` },
        { ...card, id: `${index}-2` }
    ]));


    const shuffledCards = shuffleArray(duplicatedCards);

    return (
        <div id="boardCss">
            {
                shuffledCards.map((card) => (
                    
                    <Card 
                    
                        key={card.id} 
                        image={card.image} 
                        title={card.title} 
                    />
                    
                ))
            }
        </div>
    );
}

export default Board;

