import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [isLocationOn, setLocationOn] = useState(false);

  const toggleLocation = () => {
    setLocationOn(!isLocationOn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location App</Text>
      <Text style={styles.description}>
        This app helps you manage your location settings.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title={isLocationOn ? 'Turn Off Your Location' : 'Turn On Your Location'}
          onPress={toggleLocation}
        />
      </View>
      {isLocationOn && (
        <View style={styles.mapContainer}>
          <MapView style={styles.map} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
