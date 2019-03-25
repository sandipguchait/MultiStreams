import React from 'react';
import { Router, Route } from 'react-router-dom'; 

//components
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/streamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';


const App = () => {
  return (
    <div className="ui container" style={{ marginTop:'10px'}}>
      <Router history={history}>
        <div>
          <Header/>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new"  component={StreamCreate}/>
          <Route path="/streams/edit"  component={StreamEdit}/>
          <Route path="/streams/delete"  component={StreamDelete}/>
          <Route path="/streams/show"  component={StreamShow}/>
        </div>
      </Router>
    </div>
  )
}

export default App;
