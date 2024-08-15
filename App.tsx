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
import MultiRowIconTextComponent from './src/component2/LoanStatus';

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



const rows = [
  { icon: require('./assets/submission.png'), text: 'Application Submission' },
  { icon: require('./assets/credit.png'), text: 'Credit Evaluation' },
  { icon: require('./assets/loan.png'), text: 'Loan Approval Processing' },
  { icon: require('./assets/approved.png'), text: 'Loan Approved' },
  { icon: require('./assets/disbursement.png'), text: 'Loan Disbursement' },
];


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.darker,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* < MyLoan /> */}
      {/* <Greeting /> */}
      <MultiRowIconTextComponent rows={rows} loanStatus={4}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 20
  },
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
