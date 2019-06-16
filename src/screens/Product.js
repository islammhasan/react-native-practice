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
import { strings } from "../strings";

export class Product extends Component {
  render() {
    const {
      mainContainer,
      mainImage,
      flatContainer,
      categoryContainerButton,
      categoryImage,
      detailsContainer,
      chatButton,
      sellerImage,
      sellerName,
      separatorStyle,
      scrollViewStyle,
      advArea,
      advNameStyle,
      advDetailsStyle
    } = styles;

    return (
      <View style={mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={scrollViewStyle}
        >
          <Image
            style={mainImage}
            source={{
              uri:
                "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg"
            }}
          />

          <FlatList
            data={dataSample}
            horizontal
            inverted
            contentContainerStyle={flatContainer}
            ItemSeparatorComponent={() => <View style={separatorStyle} />}
            extraData={this.state}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { image } = item;
              return (
                <TouchableOpacity style={categoryContainerButton}>
                  <Image style={categoryImage} source={{ uri: image }} />
                </TouchableOpacity>
              );
            }}
          />

          <View style={advArea}>
            <Text style={advNameStyle}>
              {data.advName}
            </Text>
            <Text style={advDetailsStyle}>{data.advDetails}</Text>
          </View>

          <View style={detailsContainer}>
            <Image
              style={sellerImage}
              source={{
                uri: data.vendorImage
              }}
            />
            <Text style={sellerName}>{data.vendorName}</Text>
            <TouchableOpacity style={chatButton}>
              <Text>{strings.chatting}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center", marginTop: 20 },
  mainImage: { width: 325, height: 225, borderRadius: 15 },
  flatContainer: { marginTop: 10, paddingLeft: 20, paddingRight: 10 },
  categoryContainerButton: {
    width: 69,
    height: 69,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  categoryImage: { width: 69, height: 69, borderRadius: 5 },
  detailsContainer: {
    backgroundColor: "#eee",
    borderRadius: 5,
    flexDirection: "row-reverse",
    alignItems: "center",
    width: 300,
    height: 79,
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    marginVertical: 20
  },
  chatButton: {
    backgroundColor: "orange",
    borderRadius: 5,
    height: 30,
    width: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  sellerImage: { width: 60, height: 60, borderRadius: 50 },
  sellerName: { flex: 1, fontSize: 15, lineHeight: 50, marginRight: 10 },
  separatorStyle: { width: 10, alignSelf: "center" },
  scrollViewStyle: { alignItems: "center" },
  advArea: { width: 300, marginVertical: 10 },
  advNameStyle: { fontSize: 18, marginBottom: 15 },
  advDetailsStyle: { fontSize: 14 }
});

const data = {
  vendorName: "أحمد محمد",
  vendorImage:
    "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/",
  advName: "كتاب",
  advDetails:
    "هذا الكتاب يحتوي على عديد من الأشياء الرائعة التي يمكنك الإستمتاع بها أنت و عائلتك"
};

const dataSample = [
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "image1"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "image2"
  },
  {
    image:
      "http://www.carolinrauen.com/wp-content/uploads/2018/09/carolinrauen_reuber_08.jpg",
    title: "image3"
  },
  {
    image:
      "https://assets.znocdn.net/clientassets/portal/v2/images/pc/products/ins-pc@2x.jpg",
    title: "image4"
  },
  {
    image:
      "https://uxstudioteam.com/website/wp-content/uploads/2018/03/book-fb-2.png",
    title: "image4"
  },
  {
    image:
      "http://hofstede.com.au/content/1-projects/5-agda-awards-book/12.jpg",
    title: "image4"
  }
];
