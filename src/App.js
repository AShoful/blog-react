import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import{connect} from 'react-redux'
import PostsList from './containers/PostsListContainer/'
import AddPost from './containers/AddPostContainer/'
import EditPost from './containers/EditPostContainer/'
import Auth from './containers/AuthContainer/'
import Logout from './components/Logout/'
import Registration from './components/Registration'
import FullPost from './containers/FullPostContainer/'
import {autoLogin} from './store/actions/actionsAuth'


class App extends React.Component {
  componentDidMount(){
    this.props.autoLogin()
  }
  render (){
    return (
      <Layout>
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/regist" component={Registration} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/post/:id/edit" component={EditPost} />
            <Route path="/post/:id" component={FullPost} />
            <Route path ="/logout" component={Logout} />
            <Route path="/" exact component={PostsList} />
            <Redirect to = {'/'} />
          </Switch>
      </Layout>
    )}
}

const mapDispatchToProps = dispatch => ({
  autoLogin: () => dispatch(autoLogin())
})

export default connect(null, mapDispatchToProps)(App);

