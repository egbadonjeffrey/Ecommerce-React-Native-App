import { View, Text } from "native-base";
import React, { useState } from "react";
import { useWindowDimensions, StyleSheet } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Colors from "../../../color";
import Orders from "./Orders";
import Profile from "./Profile";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const Tabs = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "first",
      title: "PROFILE",
    },
    {
      key: "second",
      title: "ORDERS",
    },
  ]);

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        style={styles.tabStyle}
        indicatorStyle={{ backgroundColor: Colors.black }}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({ route, color }) => (
          <Text style={{ color, ...styles.text }} key={route.key}>
            {route.title}
          </Text>
        )}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
