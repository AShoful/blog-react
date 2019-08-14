import React from 'react'
import {NavLink} from 'react-router-dom'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id}) => {
	
	return(
	<div className = {classes.PostItem} >
		<NavLink to={"/post/"+ _id}   >
	    	<p className={classes.PostItemText}>{title}</p>
		</NavLink>
	    <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>                
    </div>)}

PostItem.defaultProps = {
	title: 'Blog React',
	createdAt: Date.now(),
	_id: 1234
};

export default PostItem;