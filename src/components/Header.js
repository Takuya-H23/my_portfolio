import React, { Component } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

class Header extends Component {
  state = {
    isClicked: false,
  }

  handleNav = () => {
    this.setState(prev => ({
      isClicked: !prev.isClicked
    }))
  }

  render() {
    return (
      <header>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 130">              
          <path fill="none" stroke="white" strokeWidth="3.5" id="st1" className="st1" d="M97.51,16.12c-0.58-0.42-1.34-0.48-1.97-0.15c-0.63,0.32-1.03,0.97-1.03,1.69c0,0,0,13.55,0,18.36
          c0,1.87-0.11,3.55-0.38,4.97c-0.2,1.07-0.48,2-0.85,2.76c-0.56,1.15-1.25,1.94-2.26,2.52c-1.01,0.58-2.43,0.95-4.46,0.96
          c-4.95,0-8.89,0-11.6,0c-2.71,0-4.17,0-4.18,0c-0.5,0-0.99,0.2-1.34,0.55s-0.55,0.84-0.55,1.34v49.15
          c-1.81,0.75-3.09,2.53-3.09,4.61c0,2.75,2.23,4.98,4.98,4.98c2.75,0,4.98-2.23,4.98-4.98c0-2.08-1.28-3.86-3.09-4.61l0-47.25
          c0.62,0,1.38,0,2.29,0c2.71,0,6.65,0,11.6,0c2.21,0,4.12-0.37,5.74-1.14c1.21-0.58,2.24-1.39,3.05-2.36
          c1.22-1.46,1.94-3.24,2.37-5.17c0.43-1.94,0.57-4.05,0.57-6.32c0-2.41,0-7,0-10.99c0-1.26,0-2.45,0-3.5
          c12.43,10.35,20.35,25.93,20.35,43.37c0,14.07-5.29,26.93-13.96,36.82c-7.71,8.79-18.09,15.21-29.77,18.01
          c-1.05-1.57-2.93-2.47-4.92-2.16c-2.72,0.43-4.58,2.98-4.15,5.7c0.43,2.72,2.98,4.58,5.7,4.15c2.13-0.33,3.72-1.97,4.11-3.97
          c12.52-2.97,23.63-9.83,31.87-19.23c9.24-10.54,14.9-24.29,14.9-39.32C122.43,44.84,112.6,27.05,97.51,16.12z" />
  
          <path fill="none" stroke="white" strokeWidth="3.5" className="st2" id="st2" d="M73.19,25.42c-2.08,0-3.86,1.28-4.61,3.09c-8.99,0-28.42,0-33.1,0c-1.65,0-3.17,0.36-4.49,1.01
          c-1.98,0.97-3.48,2.56-4.46,4.37c-0.98,1.82-1.47,3.89-1.47,5.95c0,2.72,0.85,5.49,2.74,7.64c0.94,1.07,2.15,1.97,3.58,2.59
          c1.43,0.62,3.08,0.95,4.9,0.95c5.04,0,11.36,0,14.46,0v69.12c-12.46-2.58-23.41-9.25-31.39-18.57C10.91,91.7,5.82,78.91,5.82,64.9
          c0-15.58,6.31-29.67,16.52-39.89C32.55,14.8,46.64,8.49,62.23,8.49c1.65,0,3.81,0.16,5.93,0.45c0.38,1.8,1.75,3.33,3.66,3.81
          c2.67,0.67,5.38-0.96,6.04-3.63c0.67-2.67-0.96-5.38-3.63-6.04c-2.12-0.53-4.27,0.39-5.39,2.13c-2.32-0.32-4.69-0.5-6.61-0.5
          c-33.25,0-60.2,26.95-60.2,60.2c0,14.93,5.44,28.61,14.45,39.13c9,10.52,21.58,17.9,35.85,20.26c0.55,0.09,1.11-0.07,1.53-0.42
          c0.42-0.36,0.67-0.89,0.67-1.44v-73.3c0-0.5-0.2-0.99-0.55-1.34c-0.35-0.35-0.84-0.55-1.34-0.55c0,0-9.4,0-16.36,0
          c-1.37,0-2.48-0.25-3.4-0.64c-1.37-0.6-2.34-1.53-3.02-2.7c-0.67-1.17-1.02-2.6-1.02-4.04c0-1.95,0.64-3.91,1.77-5.29
          c0.56-0.69,1.24-1.25,2.04-1.64c0.8-0.39,1.72-0.62,2.83-0.62c4.69,0,24.11,0,33.1,0c0.75,1.81,2.53,3.09,4.61,3.09
          c2.75,0,4.98-2.23,4.98-4.98S75.95,25.42,73.19,25.42z" />
        </svg>
        </div>
        <div onClick={this.handleNav}>
          {this.state.isClicked ? <FaTimes className="menu-icon"/> : <FaBars className="menu-icon"/>}
        </div>
        <nav className={this.state.isClicked ? 'nav-mobile' : ''}>
          <ul className={this.state.isClicked ? 'nav-animation' : ''}>
            <li><a href="/home">HOME</a></li>
            <li><a href="/work">WORK</a></li>
            <li><a href="/profile">PROFILE</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header