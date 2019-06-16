import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView
} from "react-native";
import { Container, MainTextInput, Button } from "../components/common";
import { icons } from "../assets/icons";
import { arrayExpression } from "@babel/types";

export class SignUp extends Component {
  state = {
    btnLoading: false
  };

  render() {
    const { addPhoto, largeInput, lgIcon, smallInput, btnCustom } = styles;
    const { btnLoading } = this.state;

    return (
      <Container title={"التسجيل كتاجر"}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <TouchableOpacity
            style={[
              addPhoto,
              {
                marginTop: 20,
                alignItems: "center",
                marginBottom: 50,
                height: 150,
                width: 150
              }
            ]}
          >
            <Image
              style={[addPhoto, { marginBottom: 10 }]}
              source={{
                uri:
                  "https://cdn2.iconfinder.com/data/icons/circular-icons-line/82/Circular_Camera-512.png"
              }}
            />
            <Text>اختر صورة</Text>
          </TouchableOpacity>
          <MainTextInput
            title={"الموقع الإلكتروني"}
            titleStyle={{ marginBottom: 5, fontSize: 13 }}
            customInputContainer={largeInput}
            iconStyle={lgIcon}
            placeholder={"الموقع الإلكتروني"}
          />
          <MainTextInput
            title={"الموقع"}
            titleStyle={{ marginBottom: 5, fontSize: 13 }}
            customInputContainer={largeInput}
            secondImageURL={icons.map}
            iconStyle={lgIcon}
            placeholder={"الموقع"}
          />
          <Text
            style={{
              marginVertical: 25,
              fontSize: 13,
              alignSelf: "flex-end",
              marginRight: 20
            }}
          >
            حسابات التواصل الإجتماعي
          </Text>

          {/* <View
            style={{ flexDirection: "row", justifyContent: "space-between" , width: 325}}
          >
            <MainTextInput
              customInputContainer={smallInput}
              imageURL={icons.profile}
              iconStyle={lgIcon}
              placeholder={"instagram account"}
              customInputStyle={{ textAlign: "center" }}
            />
            <MainTextInput
              customInputContainer={smallInput}
              imageURL={icons.profile}
              iconStyle={lgIcon}
              placeholder={"instagram account"}
              customInputStyle={{ textAlign: "center" }}
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between", width: 325 }}
          >
            <MainTextInput
              customInputContainer={smallInput}
              imageURL={icons.profile}
              iconStyle={lgIcon}
              placeholder={"instagram account"}
              customInputStyle={{ textAlign: "center" }}
            />
            <MainTextInput
              customInputContainer={smallInput}
              imageURL={icons.profile}
              iconStyle={lgIcon}
              placeholder={"instagram account"}
              customInputStyle={{ textAlign: "center" }}
            />
          </View> */}
          <FlatList
            data={inputData}
            numColumns={2}
            contentContainerStyle={{
              alignItems: "center",
              paddingVertical: 20
            }}
            showsVerticalScrollIndicator={false}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { name, image } = item;
              return (
                <MainTextInput
                  customInputContainer={smallInput}
                  imageURL={image}
                  iconStyle={lgIcon}
                  placeholder={name}
                  customInputStyle={{ textAlign: "center" }}
                />
              );
            }}
          />
          <Button
            customStyle={btnCustom}
            onPress={() => this.setState({ btnLoading: true })}
            isLoading={btnLoading}
            title={"التسجيل"}
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  addPhoto: {
    width: 105,
    height: 105
  },
  largeInput: {
    width: 325,
    height: 34,
    borderRadius: 5
  },
  lgIcon: {
    width: 16,
    height: 22
  },
  smallInput: {
    width: 158.4,
    height: 43,
    justifyContent: "center",
    borderRadius: 5
  },
  btnCustom: {
    width: 325,
    height: 45,
    backgroundColor: "red",
    borderRadius: 5
  }
});

const inputData = [
  {
    name: "احمد",
    image: icons.map
  },
  {
    name: "اسلام",
    image: icons.heart
  },
  {
    name: "مجدي",
    image: icons.profile
  },
  {
    name: "ابوالنقا",
    image: icons.map
  }
];
