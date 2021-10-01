import React from 'react';
import { Header,Icon, Badge } from 'react-native-elements';

const MyHeader=props=>{
    return(
    <Header 
    leftComponent={<Icon name='bars' type='font-awesome' color='white'/>}
    centerComponent={{text:props.title,style:{color : 'yellow',fontSize : 20, fontWeight : 'bold'}}}
    backgroundColor="black"/>)
}
export default MyHeader;