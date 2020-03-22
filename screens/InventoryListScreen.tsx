import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Component } from "react";
import CustomListView from "./../components/CustomListView";
import ProductItemDTO from "./../ProductItemDTO";

export interface InventoryListScreenProps {}

export interface InventoryListScreenState {
  data: ProductItemDTO[];
}

class InventoryListScreen extends Component<
  InventoryListScreenProps,
  InventoryListScreenState
> {
  constructor(props: InventoryListScreenProps) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
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
        }
      ]
    };
  }

  deleteItemRow = (id: number) => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    });
  };

  public render() {
    return (
      <View style={styles.container}>
        <CustomListView
          itemList={this.state.data}
          isShopingList={false}
          deleteItemRowCallback={this.deleteItemRow}
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

export default InventoryListScreen;
