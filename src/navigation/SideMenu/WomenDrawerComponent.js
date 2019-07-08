import React, { Component } from 'react';
import Women from '../../../res/icons/Women'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Women height={20} width ={20} fill={'black'} ></Women>} label="Women" hiddenArrow={false}/>
    );
  }
}