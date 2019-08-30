import React, {useEffect} from 'react'
import PostsList from '../../components/PostsList/'
import {connect} from 'react-redux'
import {fetchItems, fetchRemoveItem} from '../../store/actions/actionsPosts'

  const  PostsListContainer = ({items, loading, fetchItems, page, isAuth, removeItem}) =>  { 

     useEffect(() => {
     fetchItems(page)}, [page, fetchItems])
   
    return ( <PostsList 
              items = {items}
              removeItem = {removeItem}
              loading= {loading}
              isAuth = {isAuth}
            /> )
  }


// class PostsListContainer extends React.Component {
  
//   componentDidMount(){
//     this.props.fetchItems(this.props.page)
//   }

//   componentDidUpdate(prevProps) {
//     const { page, fetchItems } = this.props
//     if (page !== prevProps.page) {
//         fetchItems(page);
//         }
//   }

//   render (){
//     const {items,  loading, removeItem, isAuth} = this.props
//     return  <PostsList 
//        items = {items}
//         removeItem = {removeItem}
//        loading= {loading}
//         isAuth = {isAuth}/>
//     }
//   }




  function mapStateToProps(state) {
    return {
      items: state.posts.items,
      loading: state.posts.loading,
      isAuth: state.auth.token,
      page: state.posts.page
    }
  }

  function mapDispatchToProps (dispatch){
    return{
      fetchItems: (page) => dispatch(fetchItems(page)),
      removeItem: (id) => dispatch(fetchRemoveItem(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);