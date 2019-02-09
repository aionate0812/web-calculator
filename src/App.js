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
 
  if(this.state.waitingForNewValue){
    this.setState({
      operation:op,
      waitingForNewValue:true,
    })
    return
  }

  let {displayValue, previousValue, operation} = this.state;
  if(operation === null) {
    this.setState ({
      operation:op,
      previousValue:displayValue,
      waitingForNewValue:true,
    })   
  }
  else {
    if(previousValue === null) {
    const result = calculate(previousValue,
      operation,
      displayValue.indexOf('.') > -1 ? parseFloat(displayValue)
      :parseInt(displayValue))
    this.setState ({
    displayValue: result+'',
    waitingForNewValue:true,
    })
    }
    else {
    const result = calculate(previousValue.indexOf('.') > -1 ? parseFloat(previousValue)
    :parseInt(previousValue),
    operation,
    displayValue.indexOf('.') > -1 ? parseFloat(displayValue)
      :parseInt(displayValue))
    this.setState ({
      displayValue: result+'',
      operation:op,
      previousValue:result+'',
      waitingForNewValue:true,
    })
    }
   
  }
}

handleClearButton = (value) => {
  if(value === 'C') {
    this.setState({displayValue:'0',
    operation:null}
    )}
  else {
    this.setState({displayValue:'0'})
  }
  console.log(this.state)
}
handleEqualButton = () => {
  console.log(this.state)
  if(this.state.operation===null){
    return
  }
  const{previousValue, operation, displayValue} = this.state
  this.setState({displayValue:calculate(parseFloat(previousValue),operation,parseFloat(displayValue))+'',
  previousValue:null,
  operation:null
  })
}

handleDotPressed = () => {
  if(this.state.displayValue.indexOf('.') === -1){
    this.setState({displayValue:this.state.displayValue+'.'})
  }
}

handleInvertPressed = () => {
  if(this.state.displayValue !== 0) {
    this.setState({displayValue:invert(parseFloat(this.state.displayValue))+''})
  }
}

handlePercentagePressed = () => {
  if(this.state.displayValue !== 0) {
  this.setState({displayValue:percentage(parseFloat(this.state.displayValue))+''})
  }
}

handleNumsPressed = (value) => {
  if(this.state.waitingForNewValue){
    this.setState({
      displayValue:value,
      waitingForNewValue:false,
    })
    return
  }

  let newState = ''

  if(this.state.displayValue.charAt(0) !== '0' || this.state.displayValue.slice(0,2) === '0.'){
    newState = this.state.displayValue
      
  }
   
  if(value === '0' && this.state.displayValue === '0'){
    this.setState({displayValue:value})
  }
  else if(this.state.displayValue === '0' || this.state.displayValue !== '0'){
    newState = newState + value
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
              <Button handleButtonPressed={this.handleClearButton} styles={'col'} value={this.state.operation === null || this.state.previousValue ===null ? 'AC' : 'C'}/>
              <Button handleButtonPressed={this.handlePercentagePressed} styles={'col'}value={'%'}/>
              <Button handleButtonPressed={this.handleInvertPressed} styles={'col'} value={'+/-'}/>
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
              <Button handleButtonPressed={this.handleDotPressed} styles={'col'} value={'.'}/>
              <Button handleButtonPressed={this.handleEqualButton} styles={'col orange'} value={'='}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
