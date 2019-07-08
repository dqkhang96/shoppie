import React, { Component } from 'react';
import Kids from'../../../res/icons/Kids'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Kids height={20} width ={20} fill={'black'} ></Kids>} label="Kids" hiddenArrow={false}/>
    );
  }
}