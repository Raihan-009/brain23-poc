import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Svg, { Circle } from 'react-native-svg';
import statebtn from '../../assets/status-btn.png'

const CustomCircle = ({ loanStatus, position }) => {
  const blueColor = '#5BC0EB';
  const defaultColor = '#c4c7cc';

  let fillColor;

  if (loanStatus === 4) {
    fillColor = blueColor;
  } else if (position <= 2) {
    fillColor = blueColor;
  } else if (loanStatus === 1 && position === 3) {
    fillColor = blueColor;
  } else {
    fillColor = defaultColor;
  }

  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Circle opacity="0.2" cx="10.704" cy="11.0175" r="10.6835" fill={fillColor}/>
      <Circle opacity="0.3" cx="10.7039" cy="11.0176" r="7.76075" fill={fillColor}/>
      <Circle cx="10.7039" cy="11.0171" r="5.15675" fill={fillColor}/>
    </Svg>
  );
};

const MultiRowIconTextComponent = ({ rows, loanStatus }) => {
  return (
    <View style={styles.card}>
      <View style={styles.bgcontainer}>
        <Image source={statebtn} style={styles.bgImage} />
        <Text style={styles.bgText}>Loan Stage</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          {rows.map((row, index) => (
            <View key={index} style={styles.row}>
              <View style={styles.iconContainer}>
                <Image source={row.icon} style={styles.icon} />
                <View style={styles.circle}>
                  <CustomCircle loanStatus={loanStatus} position={index} />
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
  
    bgcontainer: {
      borderWidth:1,
      position: 'relative',
      top: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage: {
      resizeMode: 'cover',
    },
    bgText: {
      position: 'absolute',
      top: 10,
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white', 
      textAlign: 'center',
    },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 35,
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
    paddingVertical: 25,
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
    zIndex: -10,
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