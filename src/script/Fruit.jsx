import React from "react";
import Choose from "./Choose";

function Fruit(props) {
    const [choice, apple, orange, banana] = Choose('');

    return (
        <div>
            <h1>어떤 과일을 좋아하나요? {choice}</h1>

            <button onClick={apple}>사과</button> &nbsp;&nbsp;&nbsp;
            <button onClick={orange}>오렌지</button> &nbsp;&nbsp;&nbsp;
            <button onClick={banana}>사과</button>
        </div>
    );

}

export default Fruit;