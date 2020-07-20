import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem, Badge } from 'react-native-elements'
import uuid from "uuid";

import styled from 'styled-components';
import { UpdateRefundedTransactionListAPI } from '../api'
import colors from '../utilis/colors';



const avatar_url = 'https://via.placeholder.com/308x90.png?text=';


const getfetchData = (item) => {
  const itemList = {
    "refundReason":`The merchant processed a refund due to lack of, or damaged inventory ${uuid.v4()}`,
    "contactEmail": item.contactEmail,
    "currency": item.currency,
    "refundId": uuid.v4(),
    "refundRemittanceId": item.refundRemittanceId,
    "state": item.state,
    "providerDisplayName": item.providerDisplayName,
    "contactName": item.contactName,
    "remittanceId": item.remittanceId,
    "amount": item.amount,
    "provider": item.provider,
    "id": item.id,
    "merchantId": item.remittanceId
  };
  UpdateRefundedTransactionListAPI(itemList);
};

const TransactionDetailView = ({ item }) => (
  <TouchableOpacity onPress={(item) => { getfetchData(item) }
  }>
    <ListItem
      title={item.contactName}
      leftAvatar={{
        title: item.contactName[0],
        source: { uri: avatar_url + item.contactName[0] },
        showEditButton: true,
      }}
      rightAvatar={
        <Badge status="error" value={<RefundTextView>Refund</RefundTextView>} />
      }
      subtitle={
        <SubTitleTextView>
          <ContainerTextView>
            <GridContainer>
              <EmailTitleColor>{item.contactEmail}</EmailTitleColor>
            </GridContainer>
            <ContainerTextView>
              <GridContainer>
                <EmailTitleColor>{item.amount}-({item.currency})</EmailTitleColor>
              </GridContainer>
            </ContainerTextView>
            <ContainerTextView>
              <BadgeContainer>
                <Badge status={item.state === 'CONFIRMED' ? 'success' : 'error'} />
                <StatusContainer>{item.state}</StatusContainer>
                <RefundTextView>Refund</RefundTextView>
              </BadgeContainer>
            </ContainerTextView>
          </ContainerTextView>


        </SubTitleTextView>
      }
      bottomDivider
    />
  </TouchableOpacity>
);

export default TransactionDetailView;



const RefundTextView = styled.Text`
    color: ${colors.whiteColor};
    fontWeight: bold;
    fontSize: 10;
    marginLeft: 10;
    width: 50;
`;

const SubTitleTextView = styled.View`
flexDirection: column;
paddingTop: 5;
`;

const ContainerTextView = styled.View`
flexDirection: column;
`;

const GridContainer = styled.View`
flexWrap: wrap;
`;

const EmailTitleColor = styled.Text`
color: ${colors.ashColor};
`;

const BadgeContainer = styled.Text`
marginTop: 10;
flexWrap: wrap;
`;

const StatusContainer = styled.Text`
fontWeight: bold;
fontSize: 10;
color: ${colors.ashColor};
marginLeft: 5;
`;

