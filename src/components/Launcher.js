import PropTypes from 'prop-types';
import React, { Component } from 'react';
import WindowPlaceHolder from './WindowPlaceHolder';
import launcherIcon from './../assets/logo-no-bg.svg';
import incomingMessageSound from './../assets/sounds/notification.mp3';
import launcherIconActive from './../assets/close-icon.png';

class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      launcherIcon,
      isOpen: false
    };
  }

  componentWillReceiveProps() {
  }

  playIncomingMessageSound() {
    var audio = new Audio(incomingMessageSound);
    audio.play();
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }
  render() {
    const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : ''),
    ];
    return (
      <div id="sc-launcher">
        <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
          <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
          <img className={'sc-open-icon'} src={launcherIconActive} />
          <img className={'sc-closed-icon'} src={this.props.agentProfile.imageUrl} />
        </div>
        <WindowPlaceHolder
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
        >
          {this.props.children}
        </WindowPlaceHolder>
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null; }
  return (
    <div className={'sc-new-messages-count'}>
      {props.count}
    </div>
  );
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default Launcher;
