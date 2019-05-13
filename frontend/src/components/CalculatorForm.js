import React, { Component } from 'react';

class CalculatorForm extends Component {

 constructor(props){
   super(props)
    this.state = {
      baseText: '',
      interestText: '',
      yearsText: '',
      yearsErrorMessage: ''
    }

    this.handleBaseChange = this.handleBaseChange.bind(this)
    this.handleInterestChange = this.handleInterestChange.bind(this)
    this.handleYearsChange = this.handleYearsChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
 }

 handleBaseChange(event){
     this.setState({baseText: event.target.value})
   }

 handleInterestChange(event){
     this.setState({interestText: event.target.value})
   }

 handleYearsChange(event){
     this.setState({yearsText: event.target.value})
  }

handleClick(event){
  event.preventDefault();
  if(!this.state.yearsText.length){
    this.setState({
      yearsErrorMessage: "Years to grow must be above zero."
    });
  } else {
    this.setState({ yearsErrorMessage: ""});

    const baseAmount = Number(this.state.baseText);
    const annualInterest = Number(this.state.interestText);
    const calculationPeriod = Number(this.state.yearsText);

    const newCalculation = {
      baseAmount: baseAmount,
      annualInterest: annualInterest,
      calculationPeriod: calculationPeriod
    };
    this.props.calculate(newCalculation);
    }
  }

  render() {
    return (
    <div className="ui inverted segment">
      <div className="ui inveted form error">
        <form onSubmit={this.handleClick}>
          <label>Base Amount:</label>
          <input
            type="text"
            aria-label="base-input"
            value={this.state.baseText}
            onChange={this.handleBaseChange}
          />
          <label>Annual Interest (%):</label>
          <input type="text"
            aria-label="annual-interest-input"
            value={this.state.interestText}
            onChange={this.handleInterestChange}
          />
          <label>Years to grow:</label>
          <input type="text"
            aria-label="years-to-grow-input"
            value={this.state.yearsText}
            onChange={this.handleYearsChange}
          />
          <div className="ui error message">{this.state.yearsErrorMessage}</div>
          <input className="ui blue button" type="submit" value="Calculate" />
        </form>
      </div>
    </div>
    )
  }
}

export default CalculatorForm
