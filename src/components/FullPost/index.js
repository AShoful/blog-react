import React from 'react';

import classes from './FullPost.module.css';

const FullPost = ({ text, createdAt }) => (
  
	<div className={classes.FullPost}>
	   <div className={classes.details}>
	       <p>{new Date(createdAt).toLocaleString().split(", ")[0]}</p>
	    </div>
	    <p className={classes.text}>{text}</p>
	</div>
  
);

export default FullPost;
