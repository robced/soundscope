import {Key} from "react";

export interface Component {
    text: String | undefined;
}

export interface Button extends Component {
    location: String;
    filled?: Boolean;
    onClick?: () => void;
}

export interface Player extends Component {
    id?: Number;
    image: Boolean;
    background: Boolean;
    timeline: Boolean;
    production?: Boolean;

}