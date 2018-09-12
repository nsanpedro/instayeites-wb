import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i){
    // console.log(comment);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times; </button>
        </p>
      </div>
    )
  },
    render() {
      return(
        <div className="comment">
          {this.props.postComments.map(this.renderComment)}
          <form ref="commentForm" className="commentForm">
            <input type="text" ref="author" placeholder="author"/>
            <input type="text" ref="comment" placeholder="author"/>
            <input type="submit" hidden />
          </form>
        </div>
      );
    }
});

export default Comments;
