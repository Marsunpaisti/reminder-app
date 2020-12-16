// @refresh state
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./redux/store";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseconfig";
import LoginWidget from "./components/LoginWidget";

firebase.initializeApp(firebaseConfig);

const rrfProps = {
	firebase,
	config: {},
	dispatch: store.dispatch,
};

export default function App() {
	const test = async () => {
		console.log("Test!");
	};

	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<View style={styles.container}>
					<LoginWidget />
					<Text>Testbutton!</Text>
					<Button title="Test" onPress={test} />
					<StatusBar style="auto" />
				</View>
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
