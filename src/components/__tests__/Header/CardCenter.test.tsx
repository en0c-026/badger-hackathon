import React from 'react';
import { render } from '@testing-library/react';
import CardCenter from '../../Header/CardCenter';
import { formatNumber } from '../../../utils';

describe('CardCenter', () => {
  test('render props and verify that the claim button is enabled', () => {
    const props = {
      claimableBalances: [
        { address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', balance: 1 },
      ],
      claimableTotal: 1542.44156,
      claimable: true,
    };
    const { getByText, getByTestId } = render(<CardCenter {...props} />);
    expect(getByTestId('claimable-total')).toHaveTextContent(formatNumber(props.claimableTotal));
    expect(getByTestId('claim-button')).toBeEnabled();
    expect(getByText(props.claimableBalances.length)).toHaveTextContent(props.claimableBalances.length.toString());

  });
  test('verify that the claim button is disabled', () => {
    const props = {
      claimableBalances: [],
      claimableTotal: 0,
      claimable: false,
    };
    const { getByTestId } = render(<CardCenter {...props} />);
    expect(getByTestId('claim-button')).toBeDisabled();
  });
});