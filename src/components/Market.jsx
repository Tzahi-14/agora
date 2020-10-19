import React, {Component} from 'react'
import { inject, observer } from 'mobx-react'
import Item from './Item'

@inject("AgoraList","Items")
@observer
class Market extends Component {
    constructor(){
        super()
        this.state={
            newItem: ""
        } 
    }
   
    handleChange = (e) => {
        this.setState({
          newItem: e.target.value
        })
      }
    
      addItem = () => {
        this.props.AgoraList.addItem(this.state.newItem)
        this.setState({
            newItem: ""
        })
      }

    render(){
        return(
            <div>
                <input type="text" placeholder="Enter your item" value={this.state.newItem} onChange={this.handleChange}/>
                <button onClick={this.addItem}>Add item</button>
                {this.props.AgoraList.list.map((i,index) => <Item key={index} item={i} /> )}
            </div>

        )
    }
}

export default Market