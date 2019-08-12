import React from 'react';
import Layout from './hoc/Layout/Layout';
import PostsList from './components/PostsList'


function App() {
  return (
    <Layout>
      <PostsList />
    </Layout>
  );
}

export default App;

