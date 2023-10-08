import React from "react";
import { Card, CardBody, CardImgOverlay, CardTitle, CardText, CardImg, Button } from "reactstrap";


const HomeImage = props => {
    return (
        <div>
            <Card>
                <CardBody style={{ textAlign: "center", borderBox: "none", marginTop: "-70px" }}>
                    <CardImg
                        src={props.dish.image1}
                        style={{
                            marginTop: "-550px",
                            fontSize: "24px",
                        }}>
                    </CardImg>
                </CardBody>
            </Card>
        </div>
    )
}

export default HomeImage;