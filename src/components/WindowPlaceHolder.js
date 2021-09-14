import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './Header';


class WindowPlaceHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classList = [
      'sc-chat-window',
      (this.props.isOpen ? 'opened' : 'closed')
    ];
    return (
      <div className={classList.join(' ')}>
        <Header
          teamName={this.props.agentProfile.teamName}
          desc={this.props.agentProfile.desc}
          imageUrl={this.props.agentProfile.imageUrl}
          onClose={this.props.onClose}
        />
        {this.props.children}
      </div>
    );
  }
}

WindowPlaceHolder.propTypes = {
  agentProfile: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WindowPlaceHolder;
