import React from "react"

export default function Data(props) {
    console.log(props);
    return (
        <div className="container">
            <h1>{props.nasaData.title}</h1>
            <h3>Date: {props.nasaData.date}</h3>
            <img src={props.nasaData.url} alt="galaxy" />
            <p>{props.nasaData.explanation}</p>
            <h4>Copyright: {props.nasaData.copyright}</h4>
        </div>
    );
}
