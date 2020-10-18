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
        // console.log(e.target.value)
        this.setState({
          newItem: e.target.value
        })
      }
    
      addItem = () => {
          console.log(this.state.newItem)
          console.log(this.props)
        this.props.AgoraList.addItem(this.state.newItem)
        this.setState({
            newItem: ""
        })
      }

    render(){
        return(
            <div>
               { console.log(this.props)}
                <input type="text" placeholder="Enter your item" value={this.state.newItem} onChange={this.handleChange}/>
                <button onClick={this.addItem}>Add item</button>
                {this.props.AgoraList.list.map((i,index) => <Item key={index} item={i} /> )}
            </div>

        )
    }
}

export default Market