import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import LoanHeader from '../LoanHeader';
import InfoRowContainer from '../InfoRow';
import Footer from '../FooterItem';

const MyLoan = () => {
    const infos = [
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
        },
        {
            "applicationRefNo": "4324323",
            "loanProductCode": "LP01",
            "applicationDate": "2024-08-14T09:45:59.466346949",
            "applicantName": "Dummy",
            "applicantMobileNum": "01789832732",
            "loanStatus": 1,
            "principalAmount": 12000,
            "loanTenure": 6,
            "interestRate": 0.5,
            "nextRepaymentDate": "08-08-2024",
            "monthlyRepayment": 2500,
            "purposeIconUrl": "http://apon-mart-customer-gateway-service-service.devbsfintech23.com/api/v1/file-server/public/X_-czHZcqRpW1CKCxEPXc5829OhMEGeBiT50fUcbUYyN7-cpqNKYgUx4pbJA_tu-965PX9n43X6nTR15iMzGMAJ1Ptrpm4tBxY89P4mpECEt3Y9DcK4YJGCUAcoJa-DJ38esct1A3IBFG71ZE5_W-A",
            "productName": "Study Loan",
            "bankName": "City Bank"
        },
    ];

  return(
    <ScrollView>
        {
            infos.map((info,index) => (
                <View key={index} style={styles.card}>
                    <LoanHeader data={info} />
                    <InfoRowContainer data={info} />
                    <Footer data={info} />
                </View>
            ))
        }
    </ScrollView>
  )
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
  
});

export default MyLoan;