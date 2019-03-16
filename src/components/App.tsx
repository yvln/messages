import * as React from 'react';
import Input from "./Input/Input"
import List from "./List/List"

import './App.scss';

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
