import React, { Component } from 'react';
import Display from './components/display'
import Button from './components/button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {calculate, doMath, addition, subtraction, multiplication, division, percentage, invert} from './math';

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
//parseInt(this.state.displayValue)
handleOperationsPressed = (op) => {
let {displayValue, previousValue, operation} = this.state;
///parseDisplayvalue, previous value, they are strings that need to be converted into numbers
console.log(op)
  if(operation === null) {
    this.setState ({
      operation:op
      
    })
    
  }
  else {
    if(previousValue === null) {
      const result = calculate(previousValue, operation, parseInt(displayValue))
console.log(result)
    this.setState ({
      displayValue: result+''
    })
    }
    else {
      const result = calculate(parseInt(previousValue), operation, parseInt(displayValue))

    this.setState ({
      displayValue: result+''
    })
    }
   
  }
}

handleNumsPressed = (value) => {

  let newState = ''

  if(this.state.displayValue.charAt(0)!== '0'){
    newState = this.state.displayValue
    
  } 

  if(value === '0' && this.state.displayValue === '0'){
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
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'/'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'7'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'8'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'9'}/>
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'X'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'4'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'5'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'6'}/>
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'-'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'1'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'2'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'3'}/>
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'+'}/>
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
