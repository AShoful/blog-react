import React from 'react'

import classes from './HeaderBlock.module.css'

const HeaderBlock = ({title, imageUrl}) => {
	const defaultUrl = 'https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  return (
    <div className={classes.HeaderBlock} 
    	style={{ backgroundImage: `url(${imageUrl || defaultUrl} )` }}>
          <h1 >{title}</h1>
    </div>
  );
};


export default HeaderBlock;