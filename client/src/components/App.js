import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 

//components
import StreamCreate from './streams/StreamCreate';
import StreamShow from './streams/streamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new"  component={StreamCreate}/>
          <Route path="/streams/edit"  component={StreamEdit}/>
          <Route path="/streams/delete"  component={StreamDelete}/>
          <Route path="/streams/show"  component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
