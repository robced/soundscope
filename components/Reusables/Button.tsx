import React from 'react';
import {Button} from "@/interfaces/AppComponent.interface";

const Button = ({text, onClick}: Button) => {
    return (
        <button onClick={onClick} className="uppercase tracking-wider text-lg hover:font-bold">
            {text}
        </button>
    );
};

export default Button;