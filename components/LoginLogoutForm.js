// @refresh state
import React, { useCallback, useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import * as firebase from "firebase";

export default function LoginLogoutForm({ isLoggedIn }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		if (firebase.auth().currentUser != null) return;
		console.log(`Attempting login`);
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
		} catch (err) {
			console.log(err.code);
			alert(err.message);
		}
	};

	const logout = async () => {
		try {
			await firebase.auth().signOut();
		} catch (err) {
			console.log(err.code);
			alert(err.message);
		}
	};

	return (
		<>
			{!isLoggedIn && (
				<>
					<TextInput
						placeholder="Email"
						autoCapitalize="none"
						style={styles.TextInput}
						onChangeText={(text) => setEmail(text)}
						autoCompleteType="email"
					/>
					<TextInput
						secureTextEntry
						placeholder="Password"
						autoCapitalize="none"
						style={styles.TextInput}
						onChangeText={(text) => setPassword(text)}
						autoCompleteType="password"
					/>
				</>
			)}

			<View style={styles.buttonContainer}>
				{isLoggedIn ? <Button title="Logout" onPress={logout} /> : <Button title="Login" onPress={login} />}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	TextInput: {
		borderWidth: 0.8,
		borderColor: "#000000",
		borderRadius: 8,
		marginVertical: 2,
		width: "90%",
		fontSize: 18,
		height: 36,
		backgroundColor: "#fffef7",
		textAlign: "center",
	},
	buttonContainer: {
		marginTop: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
