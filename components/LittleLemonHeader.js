import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.viewHead}>
      <Text
        style={styles.textHead}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHead: { 
    flex: 0.14, width: '100%',
    backgroundColor: '#EE9972'  
  },
  textHead: {
          marginTop: 35,
          fontSize: 28, fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
        }
});
