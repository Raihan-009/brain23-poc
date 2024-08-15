import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Logo from '../../assets/home.png'

const StatusBadge = ({ loanStatus }) => {
  let status;
  let backgroundColor;

  if (loanStatus === 4) {
    status = 'Active';
    backgroundColor = '#A2D729';
  } else if (loanStatus === 5) {
    status = 'Closed';
    backgroundColor = '#FF0000';
  } else {
    status = 'Inprogress';
    backgroundColor = '#F9B717';
  }

  return (
    <View style={[styles.statusBadge, { backgroundColor }]}>
      <Text style={styles.statusBadgeText}>
        {status} <ChevronIcon />
      </Text>
    </View>
  );
};

const ChevronIcon = () => (
  <Svg width="4" height="6" viewBox="0 0 4 6" fill="none">
    <Path
      d="M1.00293 1L3.00149 2.90485L1.00146 5.00073"
      stroke='white'
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LoanHeader = ({ data }) => {

  console.log(data)
  
  return (
    <View style={styles.header}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Image
            source={Logo}
            style={styles.icon}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>{data.productName}</Text>
          <Text style={styles.bankName}>{data.bankName} | {data.applicationRefNo}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.statusText}>Loan Status</Text>
        <StatusBadge loanStatus={data.loanStatus} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginRight: 10,
  },
  iconContainer: {
    borderRadius: 13,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 42,
    height: 42,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22336B',
    flexWrap: 'wrap',
  },
  bankName: {
    fontSize: 10,
    color: '#1E439B',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 10,
    color: '#7F8790',
    marginBottom: 5,
  },
  statusBadge: {
    borderRadius: 17,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  statusBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default LoanHeader;