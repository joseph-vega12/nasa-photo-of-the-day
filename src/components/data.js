import React from "react"

export default function Data(props) {
    console.log(props);
    return (
        <div>
        {props.nasaData.title}
        <img src={props.nasaData.url} alt="galaxy"/>
        </div>
    );
}
