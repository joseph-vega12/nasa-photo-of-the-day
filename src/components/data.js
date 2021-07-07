import React from "react"
import styled from 'styled-components'

const Body = styled.div`
    color: white;
    height: 110vh;
    line-height: 2;
`

const Div = styled.div`
    margin: 0 auto;
    width: 60%;
`

const HeadingH1 = styled.h1`
    margin-top: 0;
    text-align: center;
`

const H3 = styled.h3`
    margin-top: 0;
    text-align: center;
    margin-bottom: 5%;
`

const Image = styled.img`
    width: 100%; 
    margin-bottom: 2%;
`

const P = styled.h4 `
    letter-spacing: 2;
`

const H4 = styled.h4`
    margin-top: 7%;
`

export default function Data(props) {
    console.log(props);
    return (
        <Body>
            <Div>
            <HeadingH1>{props.nasaData.title}</HeadingH1>
            <H3>Date: {props.nasaData.date}</H3>
            <Image src={props.nasaData.url} alt="galaxy" />
            <P>{props.nasaData.explanation}</P>
            <H4>Copyright: {props.nasaData.copyright}</H4>
            </Div>
        </Body>
    );
}
