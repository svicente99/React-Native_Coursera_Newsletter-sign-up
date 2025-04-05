import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* https://stackoverflow.com/questions/29447715/react-native-fixed-footer */
/* https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native */

export default function LittleLemonFooter() {
  return (
    <View style={styles.viewFoot}>
      <Text style={styles.textFoot}>
        All rights reserved by Little Lemon, &copy;2022 {"\n"}- React version {React.version} -
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFoot: {
    position: 'absolute', 
    maxHeight: 90,
    left: 0, right: 0, bottom: 0, 
    backgroundColor: '#EE9972'},
  textFoot: {
          paddingTop: 10,
          fontSize: 12,
          color: 'black',
          textAlign: 'center',
          fontStyle: 'italic',
        }
});