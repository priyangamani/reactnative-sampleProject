/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * Priyanga
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
//ui-components
import TransactionListview from './src/ui-components/TransactionListview'
import { fetchData } from './src/actions'
import colors from './src/utilis/colors';


const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.appData.data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  if (data === undefined) return false;
  return (
    <Container>
      <TransactionListview
        itemList={data}
      />
      <View>
      </View>
    </Container>
  );
};

export default Main;


const Container = styled.View`
	flex: 1;
  backgroundColor: ${colors.whiteColor};
`;