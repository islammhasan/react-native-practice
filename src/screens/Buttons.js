import React, { Component } from "react";
import {View} from 'react-native'
import { Button, Container } from '../components/common'


export class Buttons extends Component {
    state = {isLoading1: false}

    render(){
        const { isLoading1 } = this.state
        return(
            <Container containerStyle={{justifyContent: 'center'}}>
                <Button isLoading title={'HIT ME'} />
                <Button onPress={()=> {this.setState({isLoading1: true})}} isLoading={isLoading1} title={'STRIKE ME'} />
                <Button onPress={()=> {this.setState({isLoading1: false})}} title={'PUSH ME'} />
            </Container>
        )
    }
}