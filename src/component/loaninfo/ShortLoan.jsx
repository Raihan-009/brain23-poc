import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

const InfoRow = ({ label, value }) => (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      {label === "Re-Payment:" ? (
      <PayNowButton />
    ) : (
      <Text style={styles.infoValue}>{value}</Text>
    )}
    </View>
  );

const FooterItem = ({ icon, label, value }) => (
    <View style={styles.footerItem}>
        <Image source={icon} style={styles.footerIcon} />
        <Text style={styles.footerLabel}>{label}</Text>
        <Text style={styles.footerValue}>{value}</Text>
    </View>
    );

const VerticalSeparator = () => <View style={styles.verticalSeparator} />;


const LoanInfoCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <Image
            source={require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/home.png')}
            style={styles.icon}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Short-Term Loan</Text>
            <Text style={styles.bankName}>City Bank</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Text style={styles.statusText}>Loan Status</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusBadgeText}>Active <ChevronIcon stroke={'white'}/>
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.infoContainer}>
        <InfoRow label="Next Repayment Date:" value="08-08-2024" />
        <InfoRow label="Monthly Repayment:" value="BDT 15,000.00" />
        <InfoRow label="No of Payments:" value="12" />
        <InfoRow label="Re-Payment:" value="" />
      </View>
      
      <View style={styles.footer}>
        <FooterItem icon={require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/interest.png')} label="Interest Rate" value="5%" />
        <VerticalSeparator />
        <FooterItem icon={require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/loan.png')} label="Loan Tenure" value="6 Months" />
        <VerticalSeparator />
        <FooterItem icon={require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/amount.png')} label="Amount" value="BDT 15,00,000" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 42,
    height: 42,
    marginRight: 10,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bankName: {
    fontSize: 14,
    color: '#666',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  statusText: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    borderRadius: 17,
    backgroundColor: '#A2D729',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    lineHeight: 16,
    marginTop: 5,
  },
  statusBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginBottom: 10,
  },
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
  footer: {
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
  payNowButton: {
    backgroundColor: '#F2C94C',
    borderRadius: 25,
    // flexDirection: 'row',
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

export default LoanInfoCard;