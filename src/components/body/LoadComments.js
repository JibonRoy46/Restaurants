import React from 'react';
import dateFormat from "dateformat";
import Loading from './Loading';


const loadComments = props => {
  if (props.commentsIsLoading) {
    return <Loading />
  }
  else {
    return (
      props.comments.map(comment => {
        return (
          <div key={comment.id}>
            <h4>{comment.author}</h4>
            <p>{comment.comment}</p>
            <p> Rating:{comment.rating}</p>
            <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
          </div>
        );
      })
    );
  }

}

export default loadComments;
