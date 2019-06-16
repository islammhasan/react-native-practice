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

export class VendorHome extends Component {
  render() {
    const {
      headerStyle,
      vendorImageStyle,
      chatIconStyle,
      chatButtonStyle,
      chatImageContainer,
      vendorInfoStyle,
      firstSectionStyle,
      locationIconStyle,
      secondSectionStyle,
      socialIconsStyle,
      socialIconStyle,
      locationSectionStyle,
      categoryContainerButton,
      categoryImage,
      flatContainer,
      separatorStyle,
      listContainerStyle,
      socialContainerStyle
    } = styles;
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={headerStyle} />
        <View style={firstSectionStyle}>
          <Image
            style={vendorImageStyle}
            source={{
              uri:
                "https://steamuserimages-a.akamaihd.net/ugc/939447311817916820/4D8E414835EAB967999F0B2FFA6B3AB76B061CF2/"
            }}
          />
          <View style={vendorInfoStyle}>
            <Text>أحمد محمد</Text>
            <Text>+96652523525</Text>
          </View>
          <TouchableOpacity style={chatButtonStyle}>
            <View style={chatImageContainer}>
              <Image
                style={chatIconStyle}
                source={{
                  uri:
                    "https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-715x657.png"
                }}
              />
            </View>
            <Text style={{ flex: 1, textAlign: "center" }}>مراسلة</Text>
          </TouchableOpacity>
        </View>
        <View style={secondSectionStyle}>
          <TouchableOpacity style={locationSectionStyle}>
            <Image
              style={locationIconStyle}
              source={{
                uri:
                  "https://cdn.iconscout.com/icon/free/png-256/gps-location-map-marker-pin-navigation-4-10932.png"
              }}
            />
            <Text>موقعي</Text>
          </TouchableOpacity>
          {/* Social meda */}
          <FlatList
            data={socialIcons}
            horizontal
            contentContainerStyle={socialContainerStyle}
            extraData={this.state}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              const { imageUrl, iconStyle } = item;
              return (
                <TouchableOpacity
                  style={[
                    socialIconStyle,
                    { justifyContent: "center", alignItems: "center" }
                  ]}
                >
                  <Image style={socialIconStyle} source={{ uri: imageUrl }} />
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <FlatList
          data={dataSample}
          numColumns={2}
          //contentContainerStyle={flatContainer}
          //ItemSeparatorComponent={() => <View style={separatorStyle} />}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const { image, title } = item;
            return (
              <TouchableOpacity style={categoryContainerButton}>
                <Text>{title}</Text>
                <Image style={categoryImage} source={{ uri: image }} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 250,
    width: "100%",
    position: "absolute",
    backgroundColor: "orange",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center"
  },
  firstSectionStyle: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 30
  },
  vendorImageStyle: { height: 75, width: 75, borderRadius: 37.5 },
  chatIconStyle: { height: 15, width: 15 },
  chatImageContainer: {
    height: 22.5,
    width: 22.5,
    backgroundColor: "orange",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  chatButtonStyle: {
    flexDirection: "row-reverse",
    backgroundColor: "#fff",
    width: 100,
    borderRadius: 5,
    height: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 5
  },
  vendorInfoStyle: {
    flex: 1,
    flexDirection: "column",
    marginRight: 10,
    alignItems: "flex-end"
  },
  locationIconStyle: { height: 20, width: 20 },
  secondSectionStyle: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 60
  },
  socialIconStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 3
  },
  socialIconsStyle: {
    flexDirection: "row-reverse"
  },
  locationSectionStyle: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center"
  },
  categoryContainerButton: {
    width: 150,
    height: 170,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10
  },
  categoryImage: { width: 150, height: 150, borderRadius: 5 },
  flatContainer: {
    marginTop: 10
  },
  separatorStyle: { height: 30, alignSelf: "center" },
  socialContainerStyle: { alignSelf: "flex-start"}
});

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

const socialIcons = [
  {
    title: "facebook",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
  },
  {
    title: "twitter",
    imageUrl: "https://img.icons8.com/metro/420/twitter.png"
  },
  {
    title: "instagram",
    imageUrl:
      "https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-04-512.png"
  },
  {
    title: "linkedin",
    imageUrl: "https://image.flaticon.com/icons/png/512/34/34227.png"
  }
];
