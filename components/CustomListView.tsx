import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import ProductItemDTO from '../ProductItemDTO'
import CustomRow from './CustomRow';

type CustomListViewProps = {
  itemList: ProductItemDTO[];
}

const CustomListView = ({itemList} : CustomListViewProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomListView</Text>
      <FlatList
            data={itemList}
            renderItem={({ item }) => <CustomRow
                item={item}
            />}
        />
    </View>
  );
};

export default CustomListView;

const styles = StyleSheet.create({
  container: {}
});
