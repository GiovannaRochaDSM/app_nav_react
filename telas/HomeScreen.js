import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';
 
function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Ir para detalhes" onPress={() => navigation.navigate('Detalhes')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default HomeScreen;