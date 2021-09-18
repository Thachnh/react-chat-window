import React, { Component } from 'react';
import closeIcon from './../assets/close-icon.png';
import homeIconUrl from './../assets/home-icon.svg';

class Header extends Component {

  render() {
    return (
      <div className="sc-header">
        <img className="sc-header--img" src={this.props.imageUrl} alt="" />
        <div className="sc-header--team-name">
          <div className="sc-header--team-name--header">{this.props.teamName}</div>
          <div className="sc-header--team-name--subheader">
            <span><img style={{width: 12, paddingRight: 2, paddingTop: 2}} src={homeIconUrl} alt="" /></span>
            <span>{this.props.desc}</span>
          </div>
        </div>
        <div className="sc-header--close-button" onClick={this.props.onClose}>
          <img src={closeIcon} alt="" />
        </div>
      </div>
    );
  }
}

export default Header;
