import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { icons } from "../../assets/icons";

export const Container = props => {
  const { children, containerStyle, loading, title } = props;
  const {
    container,
    headerStyle,
    headerListIcon,
    headerBackIcon,
    headerTextStyle
  } = styles;

  return (
    <View style={[container, containerStyle]}>
      <StatusBar backgroundColor={["red"]} barStyle="light-content" />
      <View style={headerStyle}>
        <TouchableOpacity>
          <Image style={headerListIcon} source={icons.list} />
        </TouchableOpacity>
        <Text style={headerTextStyle}>{title}</Text>
        <TouchableOpacity>
          <Image style={headerBackIcon} source={icons.back} />
        </TouchableOpacity>
      </View>
      {loading ? <ActivityIndicator color={"black"} size="large" /> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e1e1e1"
  },
  headerStyle: {
    backgroundColor: "red",
    width: "100%",
    height: 40,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  headerListIcon: {
    width: 20,
    height: 10
  },
  headerBackIcon: {
    width: 8.65,
    height: 14.72
  },
  headerTextStyle: {
    color: "#fff",
    fontSize: 15
  }
});
