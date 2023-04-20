import React, { useState } from "react";

function Choose(initialValue) {
    const [choice, setChoice] = useState('');

    const apple = () => setChoice((choice) => "사과.");
    const orange = () => setChoice((choice) => "오렌지.");
    const banana = () => setChoice((choice) => "바나나.");

    return [choice, apple, orange, banana];
}

export default Choose;