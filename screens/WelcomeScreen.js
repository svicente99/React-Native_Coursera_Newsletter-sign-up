/**
 *  Coursera - React Native - final assignment
 *  author.: Sergio Vicente @svicente99
 *  date...: Apr. 20025
 */
 
import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageLogo}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      </View>
      <View>
        <Text style={styles.middleText}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.buttonNewsletter}>
      <Pressable onPress={ () => navigation.navigate('Subscribe') }>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '30%',
    margin: 10,
  },
  image: {
    width: '200', height: '200',
    borderRadius: 20,
  },
  middleText: {
    paddingRight: 30, paddingLeft: 30,
    paddingTop: 40, paddingBottom: 10,
    fontSize: 22, fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  buttonNewsletter: {
    position: 'absolute', 
    left: 0, right: 0, 
    marginLeft: '10%',
    bottom: 30, 
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 20,
    padding: 5,
    color: 'lightgreen',
    textAlign: 'center', verticalAlign: 'center',
    backgroundColor: 'green',
    width: '90%', height: 40,
    borderRadius: 12,
  },
});

