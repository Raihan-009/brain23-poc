import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LoanHeader from '../LoanHeader';
import InfoRow from '../InfoRow';
import FooterItem from '../FooterItem';

const infoData = [
    { label: "Next Repayment Date:", value: "08-08-2024" },
    { label: "Monthly Repayment:", value: "BDT 15,000.00" },
    { label: "No of Payments:", value: "12" },
    { label: "Re-Payment:", value: "" }
  ];
  
  const footerData = [
    {
      icon: require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/interest.png'),
      label: "Interest Rate",
      value: "5%"
    },
    {
      icon: require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/loan.png'),
      label: "Loan Tenure",
      value: "6 Months"
    },
    {
      icon: require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/amount.png'),
      label: "Amount",
      value: "BDT 15,00,000"
    }
  ];
const VerticalSeparator = () => <View style={styles.verticalSeparator} />;

const StudyLoan = () => {
    return (
        <View style={styles.card}>
    
          <LoanHeader title={'Short-term Loan'} status={'Active'} />
          
          <View style={styles.infoContainer}>
            {infoData.map((item, index) => (
              <InfoRow key={index} label={item.label} value={item.value} />
            ))}
          </View>
          
          <View style={styles.footer}>
            {footerData.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <VerticalSeparator />}
                <FooterItem
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                />
              </React.Fragment>
            ))}
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
   
    infoContainer: {
      marginBottom: 10,
    },
    
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  
    verticalSeparator: {
      width: 1,
      alignSelf: 'stretch',
      backgroundColor: '#E0E0E0',
    },
    
  });

export default StudyLoan;