// @refresh state
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from "react-native";
import * as firebase from "firebase";

import firebaseConfig from "./firebaseconfig";
import LoginLogoutForm from "./components/LoginLogoutForm";

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

export default function App() {
	const [isLoggedIn, setLoggedIn] = useState(undefined);
	useEffect(() => {
		const listener = firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setLoggedIn(true);
				console.log("Authenticated as " + user.email);
			} else {
				setLoggedIn(false);
				console.log("Signed out");
			}
		});

		return listener;
	}, []);

	const test = async () => {
		console.log("Test!");
	};

	return (
		<View style={styles.container}>
			{isLoggedIn === undefined ? (
				<ActivityIndicator color="#55AAFF" size="large" />
			) : (
				<>
					<LoginLogoutForm isLoggedIn={isLoggedIn} />
					<Text>Testbutton!</Text>
					<Button title="Test" onPress={test} />
					<StatusBar style="auto" />
				</>
			)}
		</View>
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
