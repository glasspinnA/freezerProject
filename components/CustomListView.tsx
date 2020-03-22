import * as React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductItemDTO from "../ProductItemDTO";
import CustomRow from "./CustomRow";

export interface CustomListViewProps {
  itemList: ProductItemDTO[];
  isShopingList: boolean;
  deleteItemRowCallback;
}

type CustomListViewState = {
  activeIndex: number;
};

export default class CustomListViewComponent extends React.Component<
  CustomListViewProps,
  CustomListViewState
> {
  constructor(props: CustomListViewProps) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }

  setActiveChildIndex = (index: number) => {
    this.setState({ activeIndex: index });
  };

  deleteItemRow = (id: number) => {
    this.props.deleteItemRowCallback(id);
  };

  public render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.itemList}
          extraData={this.state.activeIndex}
          renderItem={({ item }) => (
            <CustomRow
              item={item}
              isShopingList={this.props.isShopingList}
              setActiveIndexCallback={this.setActiveChildIndex}
              deleteRowItemCallback={this.deleteItemRow}
              activeIndex={this.state.activeIndex}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
