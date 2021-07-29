import React from 'react';
import { render } from '@testing-library/react';
import CardHead from '../../../Balances/TableBalances/CardHead';
import { formatNumber } from '../../../../utils';

test('successfully render the accessories in the CardHead component.', () => {
  const props = {
    total: 131465.023321,
    title: 'Asset Balances',
    subtitle: 'Assets that are in your wallet',
    subtitle2: 'Your total asset holdings',
  };
  const { getByText } = render(<CardHead {...props} />);
  expect(getByText(formatNumber(props.total))).toHaveTextContent(formatNumber(props.total));
  expect(getByText(props.title)).toHaveTextContent(props.title);
  expect(getByText(props.subtitle)).toHaveTextContent(props.subtitle);
  expect(getByText(props.subtitle2)).toHaveTextContent(props.subtitle2);

});