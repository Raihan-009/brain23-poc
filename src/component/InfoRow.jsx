import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';


const ChevronIcon = ({stroke}) => (
    <Svg width="4" height="6" viewBox="0 0 4 6" fill="none">
        <Path
        d="M1.00293 1L3.00149 2.90485L1.00146 5.00073"
        stroke={stroke}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </Svg>
    );

const PayNowButton = () => (
    <TouchableOpacity style={styles.payNowButton}>
        <Text style={styles.payNowText}>Pay Now <ChevronIcon stroke={'black'} /></Text>
    </TouchableOpacity>
    );

const InfoRow = ({ label, value }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      {label === "Re-Payment:" ? (
      <PayNowButton />
    ) : (
      <Text style={styles.infoValue}>{value}</Text>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#F7FCFE',
        marginBottom:2,
        borderRadius: 8,
      },
      infoLabel: {
        fontSize: 14,
        color: '#7F8790',
        flex: 1,
      },
      infoValue: {
        fontSize: 14,
        // fontWeight: 'bold',
        color: '#090909',
        flex: 1,
        textAlign: 'right',
      },
      payNowButton: {
        backgroundColor: '#F2C94C',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width : 70,
      },
      payNowText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 2,
      },
      payNowArrow: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default InfoRow;