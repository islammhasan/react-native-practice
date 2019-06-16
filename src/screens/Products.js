import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Linking
} from "react-native";
import { Container } from "../components/common/";
import { images } from "../assets/images";
import { icons } from "../assets/icons";

export class Products extends Component {
  render() {
    const {
      listContainer,
      separatorStyle,
      itemContainer,
      mainImage,
      mapIconStyle,
      heartIconStyle,
      firstSection,
      typeTextStyle,
      secondSection,
      thirdSection,
      dateTextStyle,
      dateImageStyle
    } = styles;
    return (
      <Container title={'الرئيسية'}>
        
        <FlatList
          data={data}
          contentContainerStyle={listContainer}
          ItemSeparatorComponent={() => <View style={separatorStyle} />}
          extraData={this.state}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const { type, title, blood, date } = item;
            return (
              <TouchableOpacity style={itemContainer} onPress={()=> Linking.openURL('https://www.google.com')}>
                <View style={firstSection}>
                  <Image style={mainImage} source={images.group} />
                  <Text style={typeTextStyle}>{type}</Text>
                </View>
                <View style={secondSection}>
                  <View
                    style={{ flexDirection: "row-reverse", marginBottom: 15, width: 180 }}
                  >
                    <Image style={mapIconStyle} source={icons.map} />
                    <Text numberOfLines={1}>{title}</Text>
                  </View>
                  <View style={{ flexDirection: "row-reverse", width: 180 }}>
                    <Image style={heartIconStyle} source={icons.heart} />
                    <Text>{blood}</Text>
                  </View>
                </View>
                <View style={thirdSection}>
                  <Image style={dateImageStyle} source={icons.calendar} />
                  <Text style={dateTextStyle}>{date}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 15
  },
  separatorStyle: {
    height: 10
  },
  itemContainer: {
    width: 337,
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mainImage: {
    height: 56.42,
    width: 56.42
  },
  mapIconStyle: {
    width: 18.96,
    height: 26.18
  },
  heartIconStyle: {
    width: 18.84,
    height: 25.66
  },
  firstSection: {
    width: 60,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  typeTextStyle: {
    color: "#E51B29",
    fontSize: 10
  },
  secondSection: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  thirdSection: {
    backgroundColor: "#E51B29",
    width: 82,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  dateTextStyle: {
    color: "#fff",
    fontSize: 11
  },
  dateImageStyle: {
    width: 31,
    height: 31,
    marginBottom: 8.5
  }
});

const data = [
  {
    type: " تبرع مجاني",
    title: "عنوان المنتج عنوان المنتج عنوان المنتج عنوان المنتج عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع بمقابل",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع مجاني",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع بمقابل",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع مجاني",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع بمقابل",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع مجاني",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع بمقابل",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع مجاني",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  },
  {
    type: "تبرع بمقابل",
    title: "عنوان المنتج",
    blood: "فصيلة الدم",
    date: "16/5/2019"
  }
];
