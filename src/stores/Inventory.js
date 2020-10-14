import {observable, action, computed} from 'mobx'
import { Item } from './Item'

export class Inventory{
    @observable list = []
    @computed get numItems(){
        return this.list.length
    }
    @action addItem = (name,price=0,quantity=1) =>{
        console.log(name)
        console.log(this.list)
        let item = this.list.find(i=>i.name===name)
        console.log(item)
        if(item){
            item.quantity++
        }
        else{
            this.list.push(new Item (name,price,quantity))
        }
    }
    @action buyItem = (name)=>{
        console.log(name)
        let item = this.list.find(i=> i.name===name)
        let itemIndex = this.list.findIndex(i=> i.name===name)
        if(item.quantity>1){
            console.log(item)
            item.quantity--
        }
        else{
            console.log(item)
            this.list.splice(itemIndex,1)
        }
    }

    @action changePrice = (name,price)=>{
        let item = this.list.find(i=> i.name===name)
        if(item){
            item.price = price
        }
    }

}

