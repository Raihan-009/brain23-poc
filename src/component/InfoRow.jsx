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

const PayNowButton = () => {
  console.log('PayNowButton rendered'); // Log when the button is rendered

  const handlePress = () => {
    console.log('PayNowButton pressed'); // Log when the button is pressed
  };

  return (
    <TouchableOpacity style={styles.payNowButton} onPress={handlePress}>
      <Text style={styles.payNowText}>Pay Now <ChevronIcon stroke={'black'} /></Text>
    </TouchableOpacity>
  );
};

const InfoRow = ({ label, value, isPayButton }) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      {isPayButton ? (
        <PayNowButton />
      ) : (
        <Text style={styles.infoValue}>{value}</Text>
      )}
    </View>
  );
};

const InfoRowContainer = ({ data }) => {
  const {
    loanStatus,
    nextRepaymentDate,
    monthlyRepayment,
    loanTenure
  } = data;

  const showNextRepaymentAndRePayment = (loanStatus === 4);
  console.log(showNextRepaymentAndRePayment)

  return (
    <View>
      {showNextRepaymentAndRePayment && (
        <InfoRow label="Next Repayment Date:" value={nextRepaymentDate} />
      )}
      <InfoRow label="Monthly Repayment:" value={`BDT ${monthlyRepayment}`} />
      <InfoRow label="No of Payments:" value={`${loanTenure}`} />
      {showNextRepaymentAndRePayment && (
        <InfoRow label="Re-Payment:" value="" isPayButton={true} />
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
        marginBottom: 2,
        borderRadius: 8,
    },
    infoLabel: {
        fontSize: 14,
        color: '#7F8790',
        flex: 1,
    },
    infoValue: {
        fontSize: 10,
        color: '#090909',
        flex: 1,
        textAlign: 'right',
    },
    payNowButton: {
        backgroundColor: '#F2C94C',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 23,
        paddingVertical: 4,
    },
    payNowText: {
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 2,
    },
});

export default InfoRowContainer;