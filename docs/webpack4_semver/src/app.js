import React from 'react';
import $ from 'jquery';
import hotable from 'react-hmr-decorator';

@hotable(module)
export default class extends React.Component{
  render(){
    return (
      <div className="app-container">
        <p>Hello world!</p>
        <input />
      </div>
    )
  }
}

// export default hot(module)(App);
