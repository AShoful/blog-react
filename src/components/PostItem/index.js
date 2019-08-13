import React from 'react'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id}) => {
	return(
	<div className = {classes.PostItem} 
		onClick = {() => console.log(_id)}>
      <p className={classes.PostItemText}>{title}</p>
      <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>                
    </div>)}

PostItem.defaultProps = {
	title: 'Blog React',
	createdAt: Date.now(),
	_id: 1234
};

export default PostItem;