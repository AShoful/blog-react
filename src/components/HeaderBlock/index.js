import React from 'react'

import classes from './HeaderBlock.module.css'

const HeaderBlock = ({title, imageUrl}) => {
  return (
    <div className={classes.HeaderBlock} 
    	style={{ backgroundImage: `url(${imageUrl} )`}}>
          <h1 >{title}</h1>
    </div>
  );
};

HeaderBlock.defaultProps = {
  title: 'React Blog',
  imageUrl:
    'https://images.unsplash.com/photo-1541103554737-fe33e243b45c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5070c2f1196983d1b380bee6b3315c83&auto=format&fit=crop&w=1350&q=80',
};

export default HeaderBlock;