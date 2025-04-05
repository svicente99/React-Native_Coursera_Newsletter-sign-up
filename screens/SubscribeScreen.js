/**
 *  Coursera - React Native - final assignment
 *  author.: Sergio Vicente @svicente99
 *  date...: Apr. 20025
 */


import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, View, Text, TextInput } from 'react-native';
import { validateEmail } from '../utils/validateEmail'

/* support links :
   https://mailtrap.io/blog/react-native-email-validation/ 
   https://reactnative.dev/docs/alert
*/

export default function SubscribeScreen() {

  // State to hold the email input
  const [login, setEmail] = useState('');
  // State to hold any validation error messages
  const [error, setError] = useState(null);
  // Function to validate the entered email
  const valid_email = (input) => {
    // Update the email state with the input
    setEmail(input);
    // Check if the email input is empty
    if (!input) {
      setError('Email is required as your login.');
      return;
    }
    // Check if the input is a valid email using the validator library
    if (validateEmail(input))
      setError('');
    else
      setError('Please enter a valid email address.');
  };


   const showThanks = () => (
    Alert.alert('Thanks for subscribing,\nstay tuned!', '', [
      {text: 'OK', onPress: () => console.log('OK pressed after subscribing.')}
    ])
  );


  return (
    <View 
        indicatorStyle="white" style={styles.container}
        keyboardDismissMode="on-drag">
        <View style = {styles.imageLogo}>
          <Image
            style={styles.image}
            source={require('../assets/little-lemon-logo-grey.png')}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
          />
        </View>
        <View>
          <Text style={styles.regularText}>
              Subscribe to our newsletter for our latest delicious recipes!
          </Text>
          <View style={{flexDirection:'row', alignItems: 'left'}}>
            <TextInput 
                style={styles.input} 
                value={login} 
                placeholder={'Type your email'}
                placeholderTextColor="#b0b0b0" 
                onChangeText={valid_email} 
                keyboardType={'email-address'}
            /> 

            {/* Display the error/validation markers if applicable */}
            {error !== null && (
            error ? (
            <Text style={[styles.invalid, styles.mark]}>✗</Text>
            ) : (
            <Text style={[styles.valid, styles.mark]}>✓</Text>
            )
            )}
          </View>
            
          {/* Display the error message if there is one */}
          <View>
            {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
          </View>

          {error || error==null ? (
              <Text style={[styles.btnDisabled, styles.button]}>Subscribe</Text> ) : (
          <Pressable onPress={ showThanks }>
              <Text style={[styles.btnGreen, styles.button]}>Subscribe</Text>
          </Pressable>
          )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  regularText: {
    fontSize: 20,
    padding: 30,
    marginVertical: 2,
    color: 'black',
    textAlign: 'center',
  },
  input: { 
    marginLeft: 22, marginBottom: 20,
    borderWidth: 1, 
    padding: 4, 
    fontSize: 16, 
    height: 40, width: '90%',
    borderColor: 'gray', 
    borderRadius: 12,
    backgroundColor: '#EDEFEE', 
  },
  errorMessage: {
    marginTop: -20,
    paddingLeft: 32,
    color: 'red',
  },
  mark: {
    marginLeft: -25, marginTop: 5,
    fontSize: 20, 
  },
  valid: { color: 'green' },  
  invalid: { color: 'red' },  
  button: {
    fontSize: 18,
    padding: 6,
    textAlign: 'center', verticalAlign: 'center',
    marginLeft: '5%',
    width: '90%', height: 40,
    borderRadius: 12,
  },
  btnGreen: {
    color: 'white',
    backgroundColor: 'green'
  },
  btnDisabled: {
    color: '#606060',
    backgroundColor: '#d0d0d0'
  },
});
