import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProductItemDTO from './../ProductItemDTO';

type CustomRowProps = {
    item: ProductItemDTO;
}


const CustomRow = ({item} : CustomRowProps) => {
  return (
    <View style={styles.container}>
    <Image source={{ uri: item.imageUrl }} style={styles.photo} />
    <View style={styles.container_text}>
        <Text style={styles.title}>
            {item.productName}
        </Text>
        <Text style={styles.description}>
            {item.numberItems}
        </Text>
    </View>

</View>
  );
};

export default CustomRow;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginLeft:16,
      marginRight:16,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      backgroundColor: '#FFF',
      elevation: 2,
  },
  title: {
      fontSize: 16,
      color: '#000',
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  description: {
      fontSize: 11,
      fontStyle: 'italic',
  },
  photo: {
      height: 50,
      width: 50,
  },
});

