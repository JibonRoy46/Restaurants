import React from "react";
import { Card, CardBody, CardImgOverlay, CardTitle, CardText, CardImg, Button } from "reactstrap";


const HomeDish = props => {
    return (
        <div>
            <Card>
                <CardBody style={{ textAlign: "center", marginTop: "-70px" }}>
                    <CardImgOverlay style={{ borderBox: "none" }}>
                        <CardTitle
                            style={{ marginTop: "-450px", fontSize: "40px", color: "black" }}>
                            {props.dish.name} </CardTitle>
                        <CardText
                            style={{ fontSize: "20px" }}>
                            {props.dish.description} </CardText>
                        <Button color="secondary" >BOOK A TABLE</Button>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default HomeDish;