import React, { Component } from 'react';
import Setting  from'../../../res/icons/Setting'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Setting height={20} width ={20} fill={'black'} />} label='Setting' hiddenArrow={true}/>
    );
  }
}