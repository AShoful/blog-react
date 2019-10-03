import React from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import Pagination from '../../containers/PaginationContainer/'
import classes from './PostsList.module.css'


const PostsList = ({loading, items, removeItem, isAuth}) =>     
        <React.Fragment>  
          <div className = {classes.PostsList}>
              {
                loading && items.length !== 0 
                ? <Loader/>
                : items.map( item => (
                  <PostItem 
                    key = {item._id} 
                    {...item}
                    removeItem = {removeItem}
                    isAuth = {isAuth}/>
                    )
                )
              }
            </div>
              
            <div className = {classes.Pagination}>    
                <Pagination  />
            </div>   
          
        </React.Fragment>  
      

export default PostsList;