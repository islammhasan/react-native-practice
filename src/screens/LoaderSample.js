import React, { Component } from "react";
import { Text } from "react-native";
import { Container } from "../components/common";

export class LoaderSample extends Component {
  state = { screenLoading: false };
  componentDidMount() {
    this.setState({ screenLoading: true });
    setTimeout(() => {
      this.setState({ screenLoading: false });
    }, 2000);
  }

  render() {
    const { screenLoading } = this.state;

    return (
      <Container
        loading={screenLoading}
        containerStyle={{ backgroundColor: "red" }}
      >
        <Text>Hello</Text>
      </Container>
    );
  }
}
