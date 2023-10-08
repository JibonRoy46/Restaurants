import React from 'react';
import { Card, CardImgOverlay, CardImg, CardBody, CardTitle } from 'reactstrap';

const HomeItem = props => {
    return (
        <div>

            <CardBody>
                <CardImg
                    width="100%"
                    height="600px"
                    alt={props.dish.name}
                    src={props.dish.image}
                    style={{ opacity: "0.5" }} />

            </CardBody>

        </div>
    )
}

export default HomeItem; 