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
    // Duplicar las tarjetas
    const duplicatedCards = ogArray.card.flatMap((card, index) => ([
        { ...card, id: `${index}-1` },
        { ...card, id: `${index}-2` }
    ]));

    // Mezclar las tarjetas de forma aleatoria
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



/* import Card from "../molecule/Card";
import ogArray from "../../data/Array"

import "./Board.css"

function Board(props){

    return(
        <div id="boardCss">
            {
                 ogArray.card.flatMap((card, index) => ([
                    <Card 
                        key={`${index}-1`} 
                        image={card.image} 
                        title={card.title} 
                    />,
                    <Card 
                        key={`${index}-2`} 
                        image={card.image} 
                        title={card.title} 
                    />
                ]))
            }
        </div>
    )
    }
    
    export default Board


    function shuffle(array){
        for(let i = ogArray.length -1; i>0; i--){
            const j = Math.floor(Math.random() * (i +1))
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

        shuffle()
        ogArray.card.map((card, index)=><Card key={index} image={card.image} title={card.title} ></Card>) */