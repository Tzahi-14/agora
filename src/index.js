import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import { Item } from './stores/Item'
import { Inventory } from './stores/Inventory'

const AgoraList = new Inventory()
const Items = new Item()
const stores = {AgoraList,Items}


ReactDOM.render(<Provider {...stores} ><App /></Provider>,document.getElementById('root'));