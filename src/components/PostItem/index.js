import React from 'react'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt}) => 
		<div className = {classes.PostItem}>
      <p className={classes.PostItemText}>{title}</p>
      <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>                
    </div>

PostItem.defaultProps = {
  title: 'Blog React',
  createdAt: Date.now()};

export default PostItem;