import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './hoc/Layout/Layout';
import PostsList from './components/PostsList'
import AddPost from './components/AddPost'
import Auth from './components/Auth'
import Registration from './components/Registration'
import FullPost from './components/FullPost'


function App() {
  return (
    <Layout>
    	<Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/registr" component={Registration} />
          <Route path="/addpost" component={AddPost} />
          <Route path="/post/:id" component={FullPost} />
          <Route path="/" exact component={PostsList} />
          <Redirect to = {'/'} />
        </Switch>
    </Layout>
  )
}

export default App;

