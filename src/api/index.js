import axios from "axios";
import { Alert } from 'react-native';

//getTransactionListAPI
export const getTransactionListAPI = () => axios.get('https://ljd5o9q57e.execute-api.eu-west-2.amazonaws.com/Dev', {
  headers: {
    'Accept': 'application/json'
  }
}).then(response => response.data)
  .catch(err => {
    commonAlert('Error Occurred');
    throw err;
  });

//UpdateRefundedTransactionListAPI

export const UpdateRefundedTransactionListAPI = (itemList) => 
axios.post(`https://ljd5o9q57e.execute-api.eu-west-2.amazonaws.com/Dev?id=${itemList.id}`, itemList)
  .then(function (response) {
    commonAlert(`Refund Reason: ${itemList.refundReason}`);
  })
  .catch(function (error) {
    // handle error 
    commonAlert('Error Occurred');
  })
  .finally(function () {
    // always executed
    commonAlert('Error Occurred');
  });

  export const commonAlert = (text) =>{
    Alert.alert(
      text,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }