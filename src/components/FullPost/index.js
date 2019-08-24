import React from 'react';


import classes from './FullPost.module.css';

const FullPost = ({text, createdAt, goBack}) => 
	 
	<div className={classes.FullPost}>
		<div className={classes.details}>
			<p className = {classes.link}  onClick = {goBack}>Назад</p>	
		    <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>
		</div>
	    <p className={classes.text}>{text}</p>
	</div>


export default FullPost;
