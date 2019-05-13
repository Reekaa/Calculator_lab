import React from 'react';
import DisplayResult from '../components/DisplayResult.js';
import CalculatorForm from '../components/CalculatorForm.js';
import {render, fireEvent, cleanup} from 'react-testing-library';

const setup = () => {
  const utilsForm = render(<CalculatorForm/>);
  const utilsResult = render(<DisplayResult/>);
  const input1 = utilsForm.getByLabelText('years-to-grow-input');
  const input2 = utilsForm.getByLabelText('years-to-grow-input');
  const input3 = utilsForm.getByLabelText('years-to-grow-input');
  const btn = utilsForm.getByText('Calculate');
  const result = utilsResult.getByText

  return {
    input,
    btn,
    ...utils
  };
};
afterEach(cleanup);

describe('CalculatorForm', () => {

it('should display a result with the £ sign when calculate is clicked', () => {
  const { btn, }
})
