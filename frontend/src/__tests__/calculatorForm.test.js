import React from 'react';
import CalculatorForm from '../components/CalculatorForm.js';
import {render, fireEvent, cleanup} from 'react-testing-library';

const setup = () => {
  const utils = render(<CalculatorForm/>);
  const input = utils.getByLabelText('years-to-grow-input');
  const btn = utils.getByText('Calculate');

  return {
    input,
    btn,
    ...utils
  };
};
afterEach(cleanup);

describe('CalculatorForm', () => {
  it('should NOT allow 0 years growth', () => {
    const {getByText, input, btn} = setup()
    fireEvent.change(input, { target: {value:''} })
    fireEvent.click(btn);
    expect(getByText(/Years to grow must be above zero./i)).toBeTruthy()
  })


})
