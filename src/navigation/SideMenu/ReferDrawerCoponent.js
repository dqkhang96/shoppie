import React, { Component } from 'react';
import Refer  from'../../../res/icons/Refer'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Refer height={20} width ={20} fill={'black'} />} label={'Refer & Earn'} hiddenArrow={true}/>
    );
  }
}