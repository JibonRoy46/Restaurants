import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import { baseUrl } from "../../redux/baseUrl";


const MeuItem = props => {
    console.log(props);
    return (
        <div>
            <Card style={{ margin: "100px" }}>
                <CardBody>
                    <CardImg
                        width="80%"
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer", color: "black", fontSize: "34px" }}
                            onClick={props.DishSelect}
                        >{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default MeuItem;