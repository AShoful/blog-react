import React from 'react'
import {NavLink} from 'react-router-dom'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id, removeItem}) => {
	
	return(
	<div className = {classes.PostItem} >
		<NavLink className={classes.PostItemTitle} to={"/post/"+ _id}   >
	    	{title}
		</NavLink> &emsp;
	    <p className = {classes.PostItemDate}>
	    <span onClick = {() => removeItem(_id)}>
	    	del
		</span> &ensp;
		<NavLink className={classes.PostItemTitle} to={`/post/${_id}/edit`}   >
	    	edit
		</NavLink> &ensp;
		{new Date(createdAt).toLocaleString().split(", ")[0]}</p>                
    </div>)}


export default PostItem;