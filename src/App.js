import React, { Component } from 'react';
import Display from './components/display'
import Button from './components/button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import {calculate, percentage, invert} from './math';

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
handleOperationsPressed = (op) => {
  let {displayValue, previousValue, operation, waitingForNewValue} = this.state;
  if(waitingForNewValue){
    this.setState({
      operation:op,
      waitingForNewValue:true,
    })
    return
  }

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
        op,
        displayValue
      )
      this.setState ({
        displayValue: result+'',
        waitingForNewValue:true,
      })
    }
    else {
      const result = calculate(previousValue,
      op,
      displayValue)
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
    if(this.state.previousValue !== null && this.state.operation !== null) {
      if(this.state.previousValue === this.state.displayValue) {
        this.setState({
          displayValue:'0'
        })
        return
      }
      this.setState({
        displayValue:'0'
        })
        return
    }
    
    if(this.state.previousValue !== null) {
      this.setState({
        operation:null
        })
        return
    }
  } else {
    this.setState({
      displayValue:'0',
      operation:null
    })
  }
}

handleEqualButton = () => {
  const{previousValue, operation, displayValue} = this.state
  if(this.state.operation===null){
    return
  }
  this.setState({displayValue:calculate(previousValue,
    operation,
    displayValue)+'',
    previousValue:null,
    operation:null,
    waitingForNewValue:false
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
           
            <Display styles={'row justify-content-end display'} currentElement={this.state.displayValue}/>
            
            <div className='row'>
              <Button handleButtonPressed={this.handleClearButton} styles={'col'} value={this.state.operation === null || this.state.previousValue ===null ? 'AC' : 'C'}/>
              <Button handleButtonPressed={this.handlePercentagePressed} styles={'col'}value={'%'}/>
              <Button handleButtonPressed={this.handleInvertPressed} styles={'col'} value={'±'}/>
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'÷'}/>
            </div>
            <div className='row'>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'7'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'8'}/>
              <Button handleButtonPressed={this.handleNumsPressed} styles={'col'} value={'9'}/>
              <Button handleButtonPressed={this.handleOperationsPressed} styles={'col orange'} value={'x'}/>
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
