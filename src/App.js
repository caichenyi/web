import React, {Component} from 'react';
import {
  Button
} from 'antd';

const testHoc = ( WrappedComponent ) => {
  return class HOCComponent extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
          这是高阶组件理的信息
        </div>
      )
    }
  }
};

@testHoc
class App extends Component {
  render() {
    return (
      <div>
        app
        <Button type="primary">ANTD</Button>
      </div>
    );
  }
}

export default App;
