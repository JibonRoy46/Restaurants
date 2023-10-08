import React from "react";
import { Card, CardBody, CardImgOverlay, CardTitle, CardText, CardImg, Button } from "reactstrap";


const AboutImage = props => {
    return (
        <div>

            <CardBody style={{ padding: "40px 325px 0px 0px" }}>
                <CardImg src={props.dish.image6}
                    style={{ marginTop: "50px" }}></CardImg>

                <CardImg src={props.dish.image5}
                    style={{ margin: "10px 350px 0px 0px" }}></CardImg>
                <CardImg src={props.dish.image7}
                    style={{ margin: "-720px 0px 0px 330px" }}></CardImg>
                <CardImg src={props.dish.image8}
                    style={{ margin: "-300px 0px 0px 330px" }}></CardImg>
            </CardBody>

        </div>
    )
}
export default AboutImage;