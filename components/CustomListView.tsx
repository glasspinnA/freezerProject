import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ProductItemDTO from "../ProductItemDTO";
import CustomRow from "./CustomRow";

type CustomListViewProps = {
  itemList: ProductItemDTO[];
  isShopingList: boolean;
};

const CustomListView = ({ itemList, isShopingList }: CustomListViewProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomListView</Text>
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <CustomRow item={item} isShopingList={isShopingList} />
        )}
      />
    </View>
  );
};

export default CustomListView;

const styles = StyleSheet.create({
  container: {}
});
