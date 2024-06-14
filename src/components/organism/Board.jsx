import React, { useState, useEffect } from "react";
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
    const array2 = shuffledCards

    const [flippedCards, setFlippedCards] = useState([]);
    const [lockedCards, setLockedCards] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        console.log("array 2: "+array2.length)
        console.log("locked length: " +lockedCards.length)
        if(array2.length === lockedCards.length){
            alert("Juego terminado")
        }
        if (flippedCards.length === 2) {
            console.log("reconoce que hay 2 cartas volteadas")
            setIsProcessing(true);
            const [card1, card2] = flippedCards;
            setTimeout(() => {
                console.log("entra a timeout");
                const card1Data = array2.find(card => card.id === card1);
                const card2Data = array2.find(card => card.id === card2);
                if (card1Data.image === card2Data.image) {
                    setLockedCards(prev => [...prev, card1, card2]);
                    console.log("cartas par")
                    setFlippedCards([])
                } else {
                    console.log("las cartas son distintas")
                    setFlippedCards([]);
                    
                }
                setIsProcessing(false);
            }, 1000);
        }
    }, [flippedCards, array2]);

    const handleCardClick = (cardId) => {
        if (isProcessing || flippedCards.includes(cardId) || lockedCards.includes(cardId)) {
            return;
        }

        setFlippedCards(prev => [...prev, cardId]);
    };

    return (
        <div id="boardCss">
            
            {array2.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    image={card.image}
                    title={card.title}
                    onCardClick={handleCardClick}
                    isFlipped={flippedCards.includes(card.id) || lockedCards.includes(card.id)}
                />
            ))}
        </div>
    );
}

export default Board;
