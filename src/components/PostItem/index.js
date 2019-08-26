import React from 'react'
import {NavLink} from 'react-router-dom'
import Icon from 'material-icons-react';
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id, removeItem, isAuth, owner:{login}}) => {
	
	const itemDetail = isAuth && isAuth === login
	?
	(<p className = {classes.PostItemDate}>
	    <span onClick = {() => removeItem(_id)}>
	        <Icon icon="clear" size = 'tiny' />
	    </span> &ensp;
		<NavLink className={classes.PostItemTitle} to={`/post/${_id}/edit`}   >
	    	<Icon icon="create" size = 'tiny' />
		</NavLink> &ensp;
		<span>
			<Icon icon="perm_identity" size = 'tiny'/>
		</span>	
	    &ensp;
		{new Date(createdAt).toLocaleString().split(", ")[0]}</p> )
	:
	(<p className = {classes.PostItemDate}>
		<span>
			<Icon icon="perm_identity" size = 'tiny'/>
		</span>	
	    &ensp;
		{new Date(createdAt).toLocaleString().split(", ")[0]}</p>) 	

	return(
	<div className = {classes.PostItem} >
		<NavLink className={classes.PostItemTitle} to={"/post/"+ _id}   >
	    	{title}
		</NavLink> &emsp;
	    {itemDetail}               
    </div>)}


export default PostItem;