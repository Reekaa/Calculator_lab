import React, { Component } from 'react';
import CalculatorForm from '../components/CalculatorForm';
import DisplayResult from '../components/DisplayResult';
import RequestHelper from '../helpers/request_helper';

class CalculatorBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }

    this.calculate = this.calculate.bind(this);
  }


  calculate(newCalculation){
    const url = 'http://localhost:3000/api/results/compound';
    const requestHelper = new RequestHelper(url);
    requestHelper.post(newCalculation)
    .then((data) => {
      this.setState({result: data})
    }
  );

  }


  render() {
    return (
      <>
        <CalculatorForm calculate = {this.calculate} />
        <DisplayResult result = {this.state.result} />
      </>
    )
  }
}


export default CalculatorBox
