import Image from "../atoms/Image";
import Title from "../atoms/Title";

import "./Card.css"

function Card(props){
    return(
        <div id="cardCss">
            <Image image={props.image}></Image>
            <Title title={props.title}></Title>
        </div>
    )
}

export default Card