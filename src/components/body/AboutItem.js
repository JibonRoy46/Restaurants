import React from "react";
import { Card, CardBody, CardTitle, CardText, } from "reactstrap";


const AboutItem = props => {
    return (
        <div>

            <CardBody>
                <CardText style={{ margin: "100px 50px" }}><br />
                    <p style={{ color: "#FFB000", marginLeft: "-500px", fontSize: "24px" }}>{props.dish.id}</p><br />
                    <p style={{ color: "#000", marginLeft: "-300px", fontSize: "30px", fontWeight: "bold" }}>{props.dish.name2}</p>
                    <p style={{ marginRight: "80px", marginLeft: "-50px" }}>{props.dish.name3}</p>
                    <p style={{ marginRight: "80px", marginLeft: "-50px" }}>{props.dish.name4}</p>
                </CardText>
            </CardBody>

        </div>
    )
}

export default AboutItem;