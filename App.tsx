import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopingListScreen from "./screens/ShopingListScreen";
import InventoryListScreen from "./screens/InventoryListScreen";
export default class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inventory" component={InventoryListScreen} />
          <Tab.Screen name="Shopipng List" component={ShopingListScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
