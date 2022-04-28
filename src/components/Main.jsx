import React from "react";
// import Constants from "expo-constants";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Switch, Redirect, Route } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;


/*<Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signing' exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to='/' />
      </Switch> */