import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Container, Button } from "../components/common";
import { icons } from "../assets/icons";

export class MyAccount extends Component {
  render() {
    const {
      headerStyle,
      profilePic,
      picContainer,
      customStyle,
      latterIconStyle,
      btnTextStyle,
      optionsListStyle,
      logoutStyle,
      footerStyle,
      footerContainer,
      logoutImageContainer
    } = styles;
    return (
      <Container title={"حسابي"}>
        <View style={headerStyle} />
        <View style={picContainer}>
          <Image style={profilePic} source={data.image} />
        </View>
        <Text>{data.name}</Text>
        <Text style={{ fontSize: 12, marginTop: 5 }}>{data.bio}</Text>
        <FlatList
          data={options}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={optionsListStyle}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const { title } = item;
            return (
              <Button
                customStyle={customStyle}
                title={title}
                textCustom={btnTextStyle}
                latterIconStyle={latterIconStyle}
                iconLatter={{
                  uri:
                    "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronLeft-512.png"
                }}
              />
            );
          }}
          ListFooterComponent={
            <TouchableOpacity style={footerContainer}>
              <View style={logoutImageContainer}>
                <Image
                  style={logoutStyle}
                  source={{
                    uri:
                      "https://cdn1.iconfinder.com/data/icons/essentials-pack/96/logout_close_sign_out_exit_access-512.png"
                  }}
                />
              </View>
              <Text style={{ marginTop: 10, fontSize: 12 }}>تسجيل الخروج</Text>
            </TouchableOpacity>
          }
          ListFooterComponentStyle={footerStyle}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    width: "100%",
    height: 100,
    backgroundColor: "orange",
    position: "absolute",
    marginTop: 40
  },
  picContainer: {
    width: 80,
    height: 80,
    alignSelf: "center",
    backgroundColor: "orange",
    borderWidth: 2,
    borderColor: "#e1e1e1",
    borderRadius: 50,
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  profilePic: {
    width: 40,
    height: 55
  },
  customStyle: {
    width: 300,
    height: 35,
    flexDirection: "row-reverse",
    paddingHorizontal: 10,
    borderRadius: 0,
    backgroundColor: "#fff",
    marginVertical: 5
  },
  latterIconStyle: {
    width: 20,
    height: 20
  },
  btnTextStyle: {
    flex: 1,
    color: "#000",
    fontSize: 12
  },
  optionsListStyle: {
    marginTop: 20
  },
  logoutStyle: {
    width: 25,
    height: 25
  },
  footerStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50
  },
  footerContainer: {
    alignContent: "center",
    justifyContent: "center"
  },
  logoutImageContainer: {
      backgroundColor: 'orange',
      width: 50,
      height: 50,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
  }
});

const data = {
  image: icons.profile,
  name: "محمد حسن",
  bio: "معلومات عن الشخص معلومات عن الشخص"
};

const options = [
  {
    title: "إعدادات الحساب"
  },
  {
    title: "إعلاناتي"
  },
  {
    title: "حساب العمولة"
  }
];
