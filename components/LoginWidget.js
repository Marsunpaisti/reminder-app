import React, { useEffect, useState } from "react";
import { isEmpty, isLoaded, useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { ActivityIndicator, Button } from "react-native";

export default function LoginWidget() {
	const firebase = useFirebase();
	const auth = useSelector((rootState) => rootState.firebase.auth);

	const login = async () => {
		console.log("Login");
		const value = await firebase.login({ email: "testi@testi.com", password: "testi123" });

		console.log(value);
	};

	const logout = async () => {
		console.log("Logout");
		await firebase.logout();
	};

	if (!isLoaded(auth)) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	if (!isEmpty(auth)) {
		return <Button title="Logout" onPress={logout} />;
	}

	return (
		<>
			<Button title="Login" onPress={login} />
		</>
	);
}
