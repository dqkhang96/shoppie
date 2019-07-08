import React, { Component } from 'react';
import Order from'../../../res/icons/Order'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Order height={20} width ={20} fill={'black'} ></Order>} label="Orders" hiddenArrow={true}/>
    );
  }
}