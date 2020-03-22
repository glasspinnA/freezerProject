import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
  Button
} from "react-native";
import ProductItemDTO from "../ProductItemDTO";

type CustomRowProps = {
  item: ProductItemDTO;
  isShopingList: boolean;
  setActiveIndexCallback;
  deleteRowItemCallback;
  activeIndex: number;
};

class CustomRow extends Component<CustomRowProps, any> {
  animatedValue: Animated.Value;
  cardValue: number;
  frontInterpolate: Animated.AnimatedInterpolation;
  backInterpolate: Animated.AnimatedInterpolation;

  constructor(props: CustomRowProps) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.item.id != this.props.activeIndex && this.cardValue >= 90) {
      this.toggleToCardFontSide();
    }
  }

  componentWillMount() {
    this.initCardAnimation();
  }

  initCardAnimation() {
    this.animatedValue = new Animated.Value(0);
    this.cardValue = 0;
    this.animatedValue.addListener(({ value }) => {
      this.cardValue = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"]
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ["180deg", "360deg"]
    });
  }

  toggleCard = () => {
    this.cardValue >= 90
      ? this.toggleToCardFontSide()
      : this.toggleToCardBackSide();
    this.setActiveComponenetIndex();
  };

  toggleToCardFontSide() {
    Animated.spring(this.animatedValue, {
      toValue: 0,
      friction: 8,
      tension: 10
    }).start();
  }

  toggleToCardBackSide() {
    Animated.spring(this.animatedValue, {
      toValue: 180,
      friction: 8,
      tension: 10
    }).start();
  }

  setActiveComponenetIndex = () => {
    this.props.setActiveIndexCallback(this.props.item.id);
  };

  deleteButtonPressed = () => {
    this.props.deleteRowItemCallback(this.props.item.id);
  };

  editButtonPressed = () => {};

  cardFrontSide() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }]
    };
    return (
      <Animated.View style={[styles.toggleCard, frontAnimatedStyle]}>
        <View style={styles.container}>
          <View style={styles.left}>
            <View style={styles.leftFirst}>
              <Text>{this.props.item.productName}</Text>
            </View>
            {this.props.isShopingList ? null : (
              <View style={styles.leftSecond}>
                <Text>{this.props.item.expiryDate}</Text>
              </View>
            )}
          </View>
          <View style={styles.middle}>
            <Text>
              {this.props.item.amount} {this.props.item.amountType}
            </Text>
          </View>
          {this.props.isShopingList ? null : (
            <View style={styles.right}>
              <Text>{this.props.item.isProductOpen} Chcekbox</Text>
            </View>
          )}
          {this.props.isShopingList ? null : (
            <TouchableWithoutFeedback onPress={() => this.toggleCard()}>
              <View style={styles.right}>
                <Text>Dots</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        </View>
      </Animated.View>
    );
  }

  cardBackSide() {
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }]
    };
    return (
      <TouchableWithoutFeedback onPress={() => this.toggleCard()}>
        <Animated.View
          style={[backAnimatedStyle, styles.toggleCard, styles.toggleCardBack]}
        >
          <Button title="Ta bort" onPress={this.deleteButtonPressed}>
            Ta bort
          </Button>
          <Button title="Redigera" onPress={this.editButtonPressed}>
            Redigera
          </Button>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.cardFrontSide()}
        {this.cardBackSide()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#f4e7d4"
  },
  toggleCard: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    backfaceVisibility: "hidden"
  },
  toggleCardBack: {
    backgroundColor: "red",
    position: "absolute",
    top: 0
  },
  flipText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
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
export default CustomRow;
//AppRegistry.registerComponent("animatedbasic", () => CustomRow);
