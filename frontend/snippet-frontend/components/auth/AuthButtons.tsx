import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthButtons = () => {
	const handleTwitterSignIn = () => {
		// Handle Twitter Sign-In
	};

	const handleSpotifySignIn = () => {
		// Handle Spotify Sign-In
	};

	return (
		<View style={styles.container}>
			<Button
				title='Sign in with Twitter'
				icon={<Icon name='twitter' size={20} color='white' />}
				buttonStyle={styles.button}
				onPress={handleTwitterSignIn}
			/>
			<Button
				title='Sign in with Spotify'
				icon={<Icon name='spotify' size={20} color='white' />}
				buttonStyle={[styles.button, styles.spotifyButton]}
				onPress={handleSpotifySignIn}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	button: {
		width: 250,
		marginVertical: 10,
		backgroundColor: '#1DA1F2', // Twitter blue color
	},
	spotifyButton: {
		backgroundColor: '#1DB954', // Spotify green color
	},
});

export default AuthButtons;
