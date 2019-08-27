import React from 'react'
import {connect} from 'react-redux'
import Pagination from '../../components/UI/Pagination/'
import {postsPageChahge} from '../../store/actions/actionsPosts'

const PaginationContainer = ({totalPosts, limit, pageChange, page}) => {

	return <Pagination 
			lastPage = {Math.ceil(totalPosts/limit)}
			pageChange = {pageChange}
			page = {page}
			/>
}

const mapStateToProps = state => ({
	totalPosts: state.posts.totalPosts,
	limit: state.posts.limit,
	page: state.posts.page
})

const mapDispatchToProps = dispatch =>({
	pageChange: (page) => dispatch(postsPageChahge(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer)