import React from 'react'

function BlogOrder(props){
    return(
        <div >
            <p>{props.nickname}({props.realname}) #{props.username}</p>
            <p> {props.menuname}</p>
            <p> จำนวน {props.amount} กล่อง</p>
            <p>{props.timeCreated}</p>
        </div>
    );
}

export default BlogOrder;