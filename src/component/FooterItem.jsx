import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import InterestLogo from '../../assets/interest.png';
import AmountLogo from '../../assets/amount.png';
import LoanLogo from '../../assets/loan.png';

const FooterItem = ({ icon, label, value }) => {
  return (
    <View style={styles.footerItem}>
      <Image source={icon} style={styles.footerIcon} />
      <Text style={styles.footerLabel}>{label}</Text>
      <Text style={styles.footerValue}>{value}</Text>
    </View>
  );
};

const VerticalSeparator = () => <View style={styles.verticalSeparator} />;

const Footer = ({data}) => {

  const {
    interestRate,
    loanTenure,
    principalAmount
  } = data;

  return (
    <View style={styles.footer}>
      <FooterItem
        icon={InterestLogo}
        label="Interest Rate"
        value={`${interestRate}%`}
      />
      <VerticalSeparator />
      <FooterItem
        icon={LoanLogo}
        label="Loan Tenure"
        value={`${loanTenure} Months`}
      />
      <VerticalSeparator />
      <FooterItem
        icon={AmountLogo}
        label="Amount"
        value={`BDT ${principalAmount}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  footerItem: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  footerItemContent: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  footerLabel: {
    fontSize: 12,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 2,
  },
  footerValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#22336B',
    textAlign: 'center',
  },
  verticalSeparator: {
    width: 1,
    alignSelf: 'stretch',
    backgroundColor: '#E0E0E0',
  },
});

export default Footer;