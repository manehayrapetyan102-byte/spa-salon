import './Avocado.css';
import React, { Component } from 'react'

export default class Avocado extends Component {
  render() {
    return (
      <div className='girl x'>
        <div className="box fcs">
            <h1>Let's take care about <span style={{color : 'white', background : '#FF9900', padding : '3px'}}>our skin</span></h1>
            <p>
                Lorem Ipsum is simply dummy <br />
                text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the <br />
                industry's standard dummy
            </p>
            <button>Read More</button>
        </div>
      </div>
    )
  }
}
