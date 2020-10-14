import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject("AgoraList","Items")
@observer
class Item extends Component {

    buyItem = () =>{
        console.log(this.props)
        this.props.AgoraList.buyItem(this.props.Items.name)
    }

    changePrice = () =>{
        const newPrice = prompt("enter new price")
        this.props.AgoraList.changePrice(this.props.Items.name, newPrice)
    }

    render() {
        let item = this.props.item
        console.log(this.props)
        return (
            <div>
                <ul>
                {console.log(this.props)}
                    <li onDoubleClick={this.changePrice}> {item.quantity} {item.name} available at ${item.price} per item <button className="buy-button" onClick={this.buyItem}>Buy</button></li>
                    
                </ul>


            </div>
        )
    }
}

export default Item