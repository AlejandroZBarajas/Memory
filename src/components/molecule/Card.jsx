/* 
import React, { useState } from "react";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import "./Card.css";

function Card({ id, image, title, onCardClick, isFlipped, isLocked }) {
    const handleCardClick = () => {
        if (!isFlipped && !isLocked) {
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
                <Image image="404" />
                <Title title="Not found" />
            </div>
        </div>
    );
}

export default Card;
 */

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
                <Image image="404" />
                <Title title="Not found" />
            </div>
        </div>
    );
}

export default Card;
