import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject("AgoraList","Items")
@observer
class Item extends Component {

    buyItem = () =>{
        this.props.AgoraList.buyItem(this.props.item.name)
    }

    changePrice = () =>{
        const newPrice = prompt("enter new price")
        this.props.AgoraList.changePrice(this.props.item.name, newPrice)
    }

    render() {
        let item = this.props.item
        return (
            <div>
                <ul>
                    <li onDoubleClick={this.changePrice}> {item.quantity} {item.name} available at ${item.price} per item <button className="buy-button" onClick={this.buyItem}>Buy</button></li>  
                </ul>
            </div>
        )
    }
}

export default Item