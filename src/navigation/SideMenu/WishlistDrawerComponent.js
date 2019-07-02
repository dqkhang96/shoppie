import React, { Component } from 'react';
import Wishlist  from'../../icons/Wishlist'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Wishlist height={20} width ={20} fill={'black'} ></Wishlist>} label="Wishlist" hiddenArrow={true}/>
    );
  }
}