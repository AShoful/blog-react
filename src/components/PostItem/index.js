import React from 'react'
import {NavLink} from 'react-router-dom'
import Icon from 'material-icons-react';
import Tooltip from '../UI/Tooltip/'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id, removeItem, isAuth, owner:{login}}) => {
	
	const itemDetail = isAuth && isAuth === login
	?
	(<p className = {classes.PostItemDate}>
	    <span onClick = {() => removeItem(_id)}>
	    	<Tooltip content = {'Удалить'} position = {'left'}>
	        	<Icon icon="clear" size = 'tiny' />
	        </Tooltip>	
	    </span> &ensp;
		<NavLink className={classes.PostItemTitle} to={`/post/${_id}/edit`}   >
	    	<Tooltip content = {'Редактировать пост'} position = {'left'}>
	    		<Icon icon="create" size = 'tiny' />
	    	</Tooltip>	
		</NavLink> &ensp;
		<span>
			<Tooltip content = {`Автор ${login}`} position = {'left'}>
				<Icon icon="perm_identity" size = 'tiny'/>
			</Tooltip>	
		</span>	
	    &ensp;
		    <span>
				{new Date(createdAt).toLocaleString().split(", ")[0]} 
			</span>	
		</p>)
	:
	(<p className = {classes.PostItemDate}>
		<span>
			<Tooltip content = {`Автор ${login}`} position = {'left'}>
				<Icon icon="perm_identity" size = 'tiny'/>
			</Tooltip>	
		</span>	
	    &ensp;
		    <span>
				{new Date(createdAt).toLocaleString().split(", ")[0]} 	
			</span>
		</p>)
	return(
	<div className = {classes.PostItem} >
		<NavLink className={classes.PostItemTitle} to={"/post/"+ _id}   >
	    	{title}
		</NavLink> &emsp;
	    {itemDetail}               
    </div>)}


export default PostItem;