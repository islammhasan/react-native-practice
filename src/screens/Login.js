import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container, MainTextInput, Button } from "../components/common";
import { icons } from "../assets/icons";

export class Login extends Component {
  state={name:''}
  render() {
    const { iconStyle, customInputContainer, customInputStyle } = styles;
    const { name } = this.state
    return (
      <Container containerStyle={{ justifyContent: "center" }}>
        <MainTextInput
          onChangeText = {name => this.setState({name})}
          value = {name}
          customInputStyle={customInputStyle}
          placeholder="الإسم"
          iconStyle={iconStyle}
          imageURL={icons.profile}
        />
        <MainTextInput
          customInputContainer={customInputContainer}
          placeholder="البريد الإلكتروني"
          iconStyle={iconStyle}
          imageURL={icons.profile}
        />
        <MainTextInput
          customInputStyle={[customInputStyle, { color: "red" }]}
          placeholder="كلمة المرور"
          iconStyle={iconStyle}
          imageURL={icons.profile}
        />
        <Button
          title="تسجيل الدخول"
          customStyle={{ width: 300, height: 48, marginTop: 25 }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 14.2,
    height: 18.7
  },
  customInputContainer: {
    height: 30,
    width: 300,
    borderRadius: 10
  },
  customInputStyle: {
    fontSize: 20,
    color: "blue"
  }
});
