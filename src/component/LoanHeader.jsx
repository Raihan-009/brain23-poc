import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const StatusBadge = ({ status }) => {
    const isActive = status.toLowerCase() === 'active';
    return (
      <View style={[styles.statusBadge, { backgroundColor: isActive ? '#A2D729' : '#F9B717' }]}>
        <Text style={styles.statusBadgeText}>
          {status} <ChevronIcon stroke={isActive ? 'white' : 'white'} />
        </Text>
      </View>
    );
  };
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
const LoanHeader = ({title, status}) => {

  return (
    <View style={styles.header}>
    <View style={styles.leftSection}>
    <View style={styles.iconContainer}>
        <Image
            source={require('/Users/ryuzaki/workspace/brainstation/AwesomeProject/public/images/home.png')}
            style={styles.icon}
        />
        </View>
        <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.bankName}>City Bank</Text>
        </View>
    </View>
    <View style={styles.rightSection}>
        <Text style={styles.statusText}>Loan Status</Text>
        <StatusBadge status={status} />
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
        borderRadius: 20,
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
        color: '#333',
        flexWrap: 'wrap',
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
        marginBottom: 4,
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