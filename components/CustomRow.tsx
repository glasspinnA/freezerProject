import * as React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import ProductItemDTO from "./../ProductItemDTO";
import { red } from "color-name";

type CustomRowProps = {
  item: ProductItemDTO;
  isShopingList: boolean;
};

const CustomRow = ({ item, isShopingList }: CustomRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.leftFirst}>
          <Text>{item.productName}</Text>
        </View>
        {isShopingList ? null : (
          <View style={styles.leftSecond}>
            <Text>{item.expiryDate}</Text>
          </View>
        )}
      </View>
      <View style={styles.middle}>
        <Text>
          {item.amount} {item.amountType}
        </Text>
      </View>
      {isShopingList ? null : (
        <View style={styles.right}>
          <Text>{item.isProductOpen}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f4e7d4"
  },
  left: {
    //width:50,
    height: 50,
    flexDirection: "column",
    flex: 1
  },
  middle: {
    //width:50,
    height: 50
  },
  right: {
    //width:50,
    height: 50
  },
  des: {
    height: 50,
    alignSelf: "stretch"
  },
  leftFirst: {
    //width:10,
  },
  leftSecond: {
    //width:10,
  }
});
