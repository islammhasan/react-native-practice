import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator
} from "react-native";

export const Button = props => {
  const { title, customStyle, onPress, isLoading, iconFormer, iconLatter, formerIconStyle, latterIconStyle, textCustom } = props;
  const { buttonStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, customStyle]}>
      {
        iconFormer &&
          <Image style={formerIconStyle} source={iconFormer} />
      }
      {
        isLoading ? (
        <ActivityIndicator color={"white"} size="small" />
      ) : (
        <Text style={[{ color: "#fff" }, textCustom]}>{title}</Text>
      )
      }
      {
        iconLatter &&
          <Image style={latterIconStyle} source={iconLatter} />
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "orange",
    width: 150,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10
  }
});
