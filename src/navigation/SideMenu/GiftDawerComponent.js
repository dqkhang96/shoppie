import React, { Component } from 'react';
import Gift  from'../../icons/Gift'
import MenuItem from './MenuItem'
export default class MenComponent extends Component {
  render() {
    return (
     <MenuItem  icon={<Gift height={20} width ={20} fill={'black'} />} label="Gift Cards" hiddenArrow={true}/>
    );
  }
}