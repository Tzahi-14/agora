import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react'
import Item from './components/Item'
import Market from './components/Market'

@inject("AgoraList","Items")
@observer
class App extends Component {

  render() {
    return (
      <div className="App">
        {/* {console.log(this.props.store)} */}
        {/* {this.props.AgoraList.list.map((i,index) => <Item key={index} item={i} AgoraList={this.props.AgoraList} /> )} */}
        {<Market /> }
        {/* <Item />
        <Market /> */}
      </div>
    )
  }
}
export default App;
