import React from "react";
import { View, TextInput, Image, StyleSheet, Text } from "react-native";

export const MainTextInput = props => {
  const { inputContainer, inputStyle } = styles;
  const {
    customInputContainer,
    iconStyle,
    customInputStyle,
    imageURL,
    secondImageURL,
    title,
    titleStyle
  } = props;
  return (
    <View>
      {
      title &&
        <Text style={titleStyle}>{title}</Text>
      }
      <View style={[inputContainer, customInputContainer]}>
        {
          imageURL &&
          <Image style={iconStyle} source={imageURL} />
        }
        <TextInput
          {...props}
          placeholderTextColor={'#c4c4c4'}
          style={[inputStyle, customInputStyle]}
        />
        {
          secondImageURL &&
          <Image style={iconStyle} source={secondImageURL} />
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 344,
    height: 48,
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  inputStyle: {
    textAlign: "right",
    flex: 1,
    fontSize: 11,
    color: 'red'
  }
});
