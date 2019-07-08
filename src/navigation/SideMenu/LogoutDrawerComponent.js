import React, { Component } from 'react';
import Logout  from'../../../res/icons/Logout'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Logout height={20} width ={20} fill={'black'} />} label={'Logout'} hiddenArrow={true}/>
    );
  }
}