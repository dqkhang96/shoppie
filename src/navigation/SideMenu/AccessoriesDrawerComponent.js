import React, { Component } from 'react';
import Accessories from'../../../res/icons/Accessories'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Accessories height={20} width ={20} fill={'black'} ></Accessories>} label="Accessories" hiddenArrow={false}/>
    );
  }
}