//your code here
import React, { Componet } from 'react'


export default class Comment extends Componet {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}