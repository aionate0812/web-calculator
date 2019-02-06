import React, { Component } from 'react';
import Display from './components/display'
import Button from './components/button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    displayValue: '0',
    previousValue: null,
    operation: null,
    waitingForNewValue: false
  }
}

handleNumsPressed = (value) => {
  let newState = this.state.displayValue

  if(value === '0'){
    this.setState({displayValue:value})
  }
  else if(this.state.displayValue === '0' || this.state.displayValue !== '0'){
     newState = newState + value
     console.log()
    this.setState({displayValue:newState})
  }
  else {
  this.setState({displayValue:value})
  }
}

  render() {
    return (
      <div className="App">
          <div className='container calculator'>
            <div className={'row justify-content-end display'}>
            <Display styles={''} currentElement={this.state.displayValue}/>
            </div>
            <div className='row'>
              <Button styles={'col'} value={'AC'}/>
              <Button styles={'col'}value={'%'}/>
              <Button styles={'col'} value={'+/-'}/>
              <Button styles={'col orange'} value={'/'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'7'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'8'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'9'}/>
              <Button styles={'col orange'} value={'X'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'4'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'5'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'6'}/>
              <Button styles={'col orange'} value={'-'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'1'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'2'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'3'}/>
              <Button styles={'col orange'} value={'+'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col-6'} value={'0'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'.'}/>
              <Button styles={'col orange'} value={'='}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
