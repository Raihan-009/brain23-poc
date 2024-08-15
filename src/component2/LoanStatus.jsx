import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Svg, { Circle } from 'react-native-svg';

const CustomCircle = () => (
  <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <Circle opacity="0.2" cx="10.704" cy="11.0175" r="10.6835" fill="#5BC0EB"/>
    <Circle opacity="0.3" cx="10.7039" cy="11.0176" r="7.76075" fill="#5BC0EB"/>
    <Circle cx="10.7039" cy="11.0171" r="5.15675" fill="#5BC0EB"/>
  </Svg>
);



const MultiRowIconTextComponent = ({ rows }) => {
  return (
    <View style={styles.card}>
    <View style={styles.container}>
      <View style={styles.content}>
        {rows.map((row, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.iconContainer}>
              <Image source={row.icon} style={styles.icon} />
              <View style={styles.circle}>
              <CustomCircle />
              </View>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.text}>{row.text}</Text>
            </View>
            
          </View>
        ))}
        <View style={styles.lineContainer}>
          <View style={styles.dottedLine} />
        </View>
      </View>
      <View style={styles.rightSpace} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 12,
        padding: 8,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#f0f0f0',
      },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  content: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'red',
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    marginRight: 30,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    left: 68,
  },
  lineContainer: {
    position: 'absolute',
    left: 60,
    top: '10%',
    bottom: '10%',
    width: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  dottedLine: {
    flex: 1,
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderColor: '#5BC0EB',
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 'auto',
    marginLeft: 30,
    width: '50%',
  },
  text: {
    textAlign: 'left',
    color: '#212121',
    fontSize: 15,
  },
  rightSpace: {
    flex: 1,
    borderWidth: 1,
  },
});

export default MultiRowIconTextComponent;