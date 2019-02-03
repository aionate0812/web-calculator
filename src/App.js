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
       <Button styles={'orange'} value={'X'}/>
       </div>
       <div>
       <Button value={'4'}/>
       <Button value={'5'}/>
       <Button value={'6'}/>
       <Button styles={'orange'} value={'-'}/>
       </div>
       <div>
       <Button value={'1'}/>
       <Button value={'2'}/>
       <Button value={'3'}/>
       <Button styles={'orange'} value={'+'}/>
       </div>
       <div>
       <Button value={'0'}/>
       <Button value={'.'}/>
       <Button styles={'orange'} value={'='}/>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
