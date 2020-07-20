/**
 * @format
 */

import 'react-native';
import React from 'react';
import TransactionDetailView from '../src/ui-components/TransactionDetailView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  setTimeout(() => {
    const tree = renderer.create(<TransactionDetailView />);
    expect(tree).toMatchSnapshot();
  }, 500)
});

