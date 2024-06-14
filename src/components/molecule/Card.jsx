import React from "react";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import "./Card.css";

function Card({ id, image, title, onCardClick, isFlipped }) {
    const handleCardClick = () => {
        if (!isFlipped) {
            onCardClick(id);
        }
    };

    return (
        <div id="cardCss" onClick={handleCardClick} className={`card ${!isFlipped ? 'flipped' : ''}`}>
            <div className="front">
                <Image image={image} />
                <Title title={title} />
            </div>
            <div className="back">
                <Title title="Not found" />
            </div>
        </div>
    );
}

export default Card;
