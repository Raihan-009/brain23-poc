/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MyLoan from './src/component/loaninfo/MyLoan';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const info = [
  {
      "applicationRefNo": "4324323",
      "loanProductCode": "LP01",
      "applicationDate": "2024-08-14T09:45:59.466346949",
      "applicantName": "Dummy",
      "applicantMobileNum": "01789832732",
      "loanStatus": 4,
      "principalAmount": 12000,
      "loanTenure": 6,
      "interestRate": 0.5,
      "nextRepaymentDate": "08-08-2024",
      "monthlyRepayment": 2500,
      "purposeIconUrl": "http://apon-mart-customer-gateway-service-service.devbsfintech23.com/api/v1/file-server/public/X_-czHZcqRpW1CKCxEPXc5829OhMEGeBiT50fUcbUYyN7-cpqNKYgUx4pbJA_tu-965PX9n43X6nTR15iMzGMAJ1Ptrpm4tBxY89P4mpECEt3Y9DcK4YJGCUAcoJa-DJ38esct1A3IBFG71ZE5_W-A",
      "productName": "Payday Loan",
      "bankName": "City Bank"
  }
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      < MyLoan />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
