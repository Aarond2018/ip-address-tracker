import React, { Component } from 'react';
import arrowIcon from "../images/icon-arrow.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <h2>IP Address Tracker</h2>
        <form className="form-group">
          <input type="text" name="formInput" onChange={this.props.handleChange} placeholder="Search for any IP address or domain" required></input>
          <div className="btn" onClick={this.props.onSubmit}><img src={arrowIcon} alt="arrow-icon"></img></div>
        </form>
      </header>
    )
  }
}

export default Header;