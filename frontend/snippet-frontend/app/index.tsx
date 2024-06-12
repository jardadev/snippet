import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 60 }}>Welcome to Snippet</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0B2447',
	},
});
