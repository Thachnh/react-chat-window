import React, {Component} from 'react';
import {render} from 'react-dom';
import {Launcher} from '../../src';
import messageHistory from './messageHistory';
import TestArea from './TestArea';
import Header from './Header';
import Footer from './Footer';
import monsterImgUrl from './../assets/monster.png';
import './../assets/styles';



class Demo extends Component {

  constructor() {
    super();
    this.state = {
      messageList: messageHistory,
      newMessagesCount: 0,
      isOpen: true
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [...this.state.messageList, {
        type: 'file', author: 'me',
        data: {
          url: objectURL,
          fileName: fileList[0].name
        }
      }]
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0
    });
  }

  render() {
    return <div>
      <Header />
      <TestArea
        onMessage={this._sendMessage.bind(this)}
      />
      <Launcher
        agentProfile={{
          teamName: '#lobbyfklsdjlfkjsdlkfjlsdkfjldksjflksdjflkdsjflskdj',
          desc: 'TMate Office workspace | TMate',
          imageUrl: 'https://app.tmatehq.com/static/logo.png'
        }}
        newMessagesCount={5}
        handleClick={this._handleClick.bind(this)}
        isOpen={this.state.isOpen}
      >
        <img src={monsterImgUrl} />
        <div className="sc-user-input">Hello</div>
      </Launcher>
      <img className="demo-monster-img" src={monsterImgUrl} />
      <Footer />
    </div>;
  }
}

render(<Demo/>, document.querySelector('#demo'));
