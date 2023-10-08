import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './commentForm';
import { baseUrl } from '../../redux/baseUrl';



const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>Price:{props.dish.price}</p>
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.
                        commentIsLoadingisLoading} ></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>

        </div >
    )
}

export default DishDetail;
