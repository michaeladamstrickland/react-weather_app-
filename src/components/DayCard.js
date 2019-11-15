import React from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';
import styled from 'styled-components';

const border = "2px solid green"
const DayWrapper = styled.article`
   
    .card {
        border: ${props => props.isActive ? "2px solid teal" : "1px solid grey"};
        text-align: center;
        display: flex;
        height: auto;
        width: auto;
        max-width: 150px;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .img {
        width: auto
        max-width: 55px;
    }
`

const DayCard = props => {
    console.log(props);
    
    return (
        <Col onClick={props.setSelectedDay}>
        <DayWrapper isActive={props.isActive}>
            <Card>
                <CardHeader>{props.day}</CardHeader>
                 <CardBody>
                <h2>{props.current}°</h2>
                <img src={`${process.env.PUBLIC_URL}/icons/${props.icon}.png`} alt={props.description}/>
                <p><strong>High:</strong> {props.high}°</p>
                <p><strong>Low:</strong> {props.low}°</p>
                 </CardBody>
             </Card>
             </DayWrapper>
        </Col>
    )
}
export default DayCard;