import React from 'react';
import hotable from 'react-hmr-decorator';
import { Button } from 'antd';

@hotable(module)
export default class extends React.Component {
  render() {
    return (
      <div className="app-container">
        <p>Hello world!</p>
        <input />
        <Button> HELLO BUTTON </Button>
      </div>
    )
  }
}

// export default hot(module)(App);
