import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet } from 'react-native';
 
function DetailsScreen(navigation) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Voltar" onPress={() => navigation.navigation.goBack()}
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
 
export default DetailsScreen;