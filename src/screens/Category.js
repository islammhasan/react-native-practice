import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet
} from "react-native";
import { Container } from "../components/common";

export class Category extends Component {
  render() {
    const {
      adContainerBtn,
      adImage,
      adsContainer,
      catsStyle,
      catsSeparator,
      catContainerStyle
    } = styles;
    return (
      <Container title={"اسم القسم"}>
        <View
          style={{
            backgroundColor: "red",
            position: "absolute",
            width: "100%",
            height: 160,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
            zIndex: -1
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
        <View style={{width: 350, height: 47, backgroundColor: '#fff', borderRadius: 5, justifyContent: 'center', alignItems: 'center', paddingRight: 10}}>
          <FlatList
            data={catsData}
            horizontal
            inverted
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={catsStyle}
            //ItemSeparatorComponent={() => <View style={catsSeparator} />}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { title } = item;
              return (
                <TouchableOpacity style={catContainerStyle}>
                  <Text>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
          </View>

          <FlatList
            data={adsData}
            numColumns={2}
            contentContainerStyle={adsContainer}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { image, title } = item;
              return (
                <TouchableOpacity style={adContainerBtn}>
                  <Image style={adImage} source={{ uri: image }} />
                  <Text>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  adContainerBtn: {
    width: 150,
    height: 180,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10
  },
  adImage: { width: 150, height: 150, borderRadius: 5, marginBottom: 5 },
  adsContainer: {
    paddingVertical: 20
  },
  catsStyle: {
    alignSelf: 'center'
  },
  catsSeparator: {
    width: 5
  },
  catContainerStyle: {
    marginLeft: 5,
    backgroundColor: "#fff",
    width: 70,
    height: 25,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

const catsData = [
  {
    title: "قسم 1"
  },
  {
    title: "قسم 2"
  },
  {
    title: "قسم 3"
  },
  {
    title: "قسم 4"
  },
  {
    title: "قسم 5"
  },
  {
    title: "قسم 6"
  }
];

const adsData = [
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "إعلان 1"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "إعلان 2"
  },
  {
    image:
      "http://www.carolinrauen.com/wp-content/uploads/2018/09/carolinrauen_reuber_08.jpg",
    title: "إعلان 3"
  },
  {
    image:
      "https://assets.znocdn.net/clientassets/portal/v2/images/pc/products/ins-pc@2x.jpg",
    title: "إعلان 4"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "إعلان 5"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "إعلان 6"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "إعلان 7"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "إعلان 8"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "إعلان 9"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "إعلان 10"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "إعلان 11"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "إعلان 12"
  }
];
