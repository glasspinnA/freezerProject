import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Component } from "react";
import CustomListView from "./../components/CustomListView";
import ProductItemDTO from "./../ProductItemDTO";

export interface ShopingListScreenProps {}

export interface ShopingListScreenState {}

class ShopingListScreen extends Component<
  ShopingListScreenProps,
  ShopingListScreenState
> {
  constructor(props: ShopingListScreenProps) {
    super(props);
    this.state = {};
  }
  getData(): ProductItemDTO[] {
    return [
      {
        id: 2,
        productName: "Isaac newton",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Ägg",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Kalkon",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Skinka",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      },
      {
        id: 2,
        productName: "Potatis",
        isProductOpen: true,
        expiryDate: "2020-03-02",
        amount: 3,
        amountType: "st"
      }
    ];
  }

  public render() {
    return (
      <View style={styles.container}>
        <CustomListView
          itemList={this.getData()}
          isShopingList={true}
        ></CustomListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ShopingListScreen;
