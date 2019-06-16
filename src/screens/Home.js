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

export class Home extends Component {
  render() {
    const {
      sliderImage,
      catContainerStyle,
      catImage,
      itemStyle,
      catSeparator,
      partnerContainerStyle,
      partnerSeparator,
      partnerImageStyle,
      partnerBlock,
      sliderContainer
    } = styles;
    return (
      <Container title={"الرئيسية"}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: "center" }}>
          <TouchableOpacity style={sliderContainer}>
            <Image
              style={sliderImage}
              source={{
                uri:
                  "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg"
              }}
            />
          </TouchableOpacity>
          <FlatList
            data={dataSample}
            inverted
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={catContainerStyle}
            ItemSeparatorComponent={() => <View style={catSeparator} />}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { image, title } = item;
              return (
                <TouchableOpacity style={itemStyle}>
                  <Image style={catImage} source={{ uri: image }} />
                  <Text>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <Text
            style={{
              alignSelf: "flex-end",
              marginRight: 15,
              marginBottom: 10,
              marginTop: 20
            }}
          >
            شركاء نجاحنا
          </Text>
          <FlatList
            data={partnersData}
            horizontal
            inverted
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={partnerContainerStyle}
            ItemSeparatorComponent={() => <View style={partnerSeparator} />}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { partnerName, partnerImage } = item;
              return (
                <TouchableOpacity style={partnerBlock}>
                  <Image
                    style={partnerImageStyle}
                    source={{ uri: partnerImage }}
                  />
                  <Text>{partnerName}</Text>
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
  sliderImage: {
    width: 325,
    height: 225,
    borderRadius: 5
  },
  sliderContainer: {
    marginTop: 15,
    width: 325,
    height: 225,
    borderRadius: 5
  },
  catContainerStyle: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 5
  },
  catImage: {
    width: 69,
    height: 69,
    borderRadius: 35,
    marginBottom: 5
  },
  itemStyle: {
    alignItems: "center",
    justifyContent: 'center',
    width: 70,
    height:110
  },
  catSeparator: {
    width: 10
  },
  partnerImageStyle: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 45,
    marginBottom: 5
  },
  partnerContainerStyle: {
    paddingLeft: 15,
    paddingRight: 5,
    paddingBottom: 10
  },
  partnerSeparator: {
    width: 10
  },
  partnerBlock: {
    width: 140,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5
  }
});

const dataSample = [
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "قسم 1"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "قسم 2"
  },
  {
    image:
      "http://www.carolinrauen.com/wp-content/uploads/2018/09/carolinrauen_reuber_08.jpg",
    title: "قسم 3"
  },
  {
    image:
      "https://assets.znocdn.net/clientassets/portal/v2/images/pc/products/ins-pc@2x.jpg",
    title: "قسم 4"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "قسم 5"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "قسم 6"
  }
];

const partnersData = [
  {
    partnerName: "أحمد محمد",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  },
  {
    partnerName: "اسلام محمود",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  },
  {
    partnerName: "محمود مجدي مختار",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  },
  {
    partnerName: "مازن معتز",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  },
  {
    partnerName: "عمرو ابو النجا",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  },
  {
    partnerName: "عبدالرحمن صبحي",
    partnerImage:
      "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
  }
];
