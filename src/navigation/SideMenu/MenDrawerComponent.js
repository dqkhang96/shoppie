import React, { Component } from 'react';

import Men from'../../../res/icons/Men'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem icon={<Men height={20} width ={20} fill={'black'} ></Men>} label="Men" hiddenArrow={false}/>
    );
  }
}