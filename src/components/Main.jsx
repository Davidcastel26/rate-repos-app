import React from "react";
// import Constants from "expo-constants";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
// import { Redirect,  } from "react-router-native";
// import { Redirect, Switch } from "react-router";
import { NativeRouter, Route, Link, Redirect } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <View>
        <Link exact path="/">
          <RepositoryList />
        </Link>

        <Link path="/signing">
          <Text>Working</Text>
        </Link>
        {/* <Redirect to="/" /> */}
      </View>
      {/* <RepositoryList /> */}
    </View>
  );
};

export default Main;
