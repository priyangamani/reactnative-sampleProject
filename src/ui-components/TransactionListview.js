import React from 'react';
import {FlatList } from 'react-native';
import TransactionDetailView from './TransactionDetailView';
import styled from 'styled-components';

const TransactionListview = ({ itemList,onRefresh }) => (
    <Container>
        <FlatList
                data={itemList}
                onRefresh={onRefresh}
                renderItem={({ item }) => <TransactionDetailView
                    item={item}
                />}
            />

    </Container>
);

export default TransactionListview;


const Container = styled.View`
	flex: 1;
    marginTop:50;
`;