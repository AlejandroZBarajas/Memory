import React, { useState, useEffect } from "react";
import Card from "../molecule/Card";
import ogArray from "../../data/Array";
import "./Board.css";

function shuffleArray(array) {
    console.log("entra a shuffle");
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

    const [flippedCards, setFlippedCards] = useState([]);
    const [lockedCards, setLockedCards] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [shuffledCards, setShuffledCards] = useState(() => shuffleArray([...duplicatedCards]));

    useEffect(() => {
        if (flippedCards.length === 2) {
            setIsProcessing(true);
            const [card1, card2] = flippedCards;
            setTimeout(() => {
                const card1Data = shuffledCards.find(card => card.id === card1);
                const card2Data = shuffledCards.find(card => card.id === card2);
                if (card1Data.image === card2Data.image) {
                    setLockedCards(prev => [...prev, card1, card2]);
                }
                setFlippedCards([]);
                setIsProcessing(false);
            }, 1000);
        }
    }, [flippedCards, shuffledCards]);

    useEffect(() => {
        const found = lockedCards.length / 2;
        if (shuffledCards.length === found) {
            alert("Juego terminado");
        }
    }, [lockedCards, shuffledCards.length]);

    const handleCardClick = (cardId) => {
        if (isProcessing || flippedCards.includes(cardId) || lockedCards.includes(cardId)) {
            return;
        }
        setFlippedCards(prev => [...prev, cardId]);
    };

    return (
        <div id="boardCss">
            {shuffledCards.map((card) => (
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
