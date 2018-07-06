import React from 'react';
import hotable from 'react-hmr-decorator';

@hotable(module)
export default class extends React.Component{
  render(){
    return (
      <div>
        Hello world _42323!
        <input />
      </div>
    )
  }
}

// export default hot(module)(App);
