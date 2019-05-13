import React, { Component } from 'react';

class DisplayResult extends Component {

  render() {
    return (
      <div className='ui label'>
        <i className="money bill alternate outline icon"> £ {this.props.result}</i>
      </div>
    )
  }
}


export default DisplayResult
