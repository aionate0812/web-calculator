import React, { Component } from 'react';
import Display from './components/display'
import Button from './components/button'
class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    currentElement:0
  }
}
  render() {
    return (
      <div className="App">
       <Display currentElement={this.state.currentElement}/>
       <div>
       <div>
       <Button value={'AC'}/>
       <Button value={'%'}/>
       <Button value={'+/-'}/>
       <Button value={'/'}/>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
