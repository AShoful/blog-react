import React from 'react'
import {NavLink} from 'react-router-dom'
import Tooltip from '../UI/Tooltip/'
import  classes from './PostItem.module.css'

const PostItem = ({title, createdAt, _id, removeItem, isAuth, owner:{login}}) => {
	
	const itemDetail = isAuth && isAuth === login
	?
	(<p className = {classes.PostItemDate}>
		<span onClick = {() => window.confirm('Вы действительно хотите удалить пост?') ? 
		removeItem(_id) : null}>
	    	<Tooltip content = {'Удалить'} position = {'left'}>
	        	<span className = {classes.del}>
				<img src = {require('./icons/icons8-delete-document-16.png')} alt = 'delete' />
				</span>
	        </Tooltip>	
	    </span> &ensp;
		<NavLink className={classes.PostItemTitle} to={`/post/${_id}/edit`}   >
	    	<Tooltip content = {'Редактировать пост'} position = {'left'}>
	    		<img src = {require('./icons/edit.png')} alt = 'edit' />
	    	</Tooltip>	
		</NavLink> &ensp;
		<span>
			<Tooltip content = {`Автор ${login}`} position = {'left'}>
				<img src = {require('./icons/employee.png')} alt = 'author' />
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
				<img src = './icons/employee.png' alt = 'author' />{/*<Icon icon="perm_identity" size = 'tiny'/>*/}
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