import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FooterItem = ({ icon, label, value }) => {
  return (
    <View style={styles.footerItem}>
        <Image source={icon} style={styles.footerIcon} />
        <Text style={styles.footerLabel}>{label}</Text>
        <Text style={styles.footerValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default FooterItem;