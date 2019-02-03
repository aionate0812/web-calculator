import React, { Component } from 'react';
import Display from './components/display'
import Button from './components/button'
import './style.css'
class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    currentElement:0,
  }
}
  render() {
    return (
      <div className="App">
       <Display currentElement={this.state.currentElement}/>
       <div>
       <div>
       <Button  value={'AC'}/>
       <Button  value={'%'}/>
       <Button  value={'+/-'}/>
       <Button styles={'orange'} value={'/'}/>
       </div>
       <div>
       <Button value={'7'}/>
       <Button value={'8'}/>
       <Button value={'9'}/>
       <Button value={'X'}/>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
