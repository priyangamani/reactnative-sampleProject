import 'react-native';
import { UpdateRefundedTransactionListAPI,commonAlert,getTransactionListAPI} from '../src/api'

const itemList = {
    "refundReason":`The merchant processed a refund due to lack of, or damaged inventory`,
    "contactEmail": "Email",
    "currency": "SGD",
    "refundId": "ref1w3eee34444",
    "refundRemittanceId": "ref1w3eee34444",
    "state": "PENDING",
    "providerDisplayName": "priya",
    "contactName": "priya@gmail.com",
    "remittanceId": "ref1w3eee34444",
    "amount":"1200",
    "provider":"Bsm",
    "id": "ref1w3eee34444",
    "merchantId": "ref1w3eee34444"
  };

  
describe('UpdateRefundedTransactionListAPI', () => {
    test('UpdateRefundedTransactionListAPI test case', async () => {  expect(UpdateRefundedTransactionListAPI(itemList)).toBeDefined();})
    test('Refund Reason:', () => {
        setTimeout(() => {
            commonAlert('Refund Reason:');
          }, 500)
       
    });
  });

  describe('getTransactionListAPI', () => {
    test('getTransactionListAPI test case', async () => {  expect(getTransactionListAPI()).toBeDefined();})
  });
