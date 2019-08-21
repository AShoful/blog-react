import React from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import classes from './PostsList.module.css'


const PostsList = ({loading, items}) =>     
      <div className = {classes.PostsList}>
        {
          loading && items.length !== 0 
          ? <Loader/>
          : items.map( item => (<PostItem key = {item._id} {...item}/>))
        }
      </div>
      

export default PostsList;