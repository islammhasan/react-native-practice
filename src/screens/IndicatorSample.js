import React, { Component } from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Container, Button } from '../components/common/'


export class IndicatorSample extends Component {
  state = { showIndicator: false };
  changeIndicator() {
    this.setState({ showIndicator: true });
    setTimeout(()=>{this.setState({showIndicator: false})}, 2000)
  }
  render() {
    const { showIndicator } = this.state;
    return (
      <Container loading={showIndicator} containerStyle={{justifyContent: "center"}}>
          <Button
            title={'HIT ME'}
            onPress={() => this.changeIndicator()}
          >
          </Button>
          <Button
            title={'STRIKE ME'}
            onPress={() => this.changeIndicator()}
          >
          </Button>
          <Button
            title={'PUSH ME'}
            onPress={() => this.changeIndicator()}
          >
          </Button>
      </Container>
    );
  }
}
