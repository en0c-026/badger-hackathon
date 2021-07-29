import React from 'react';
import { render } from '@testing-library/react';
import PastelChart from '../../Allocation/PastelChart';

test('PastelChart renders', () => {
  const data = [
    { name: 'WBTC', allocation: 50.22895 },
    { name: 'WETH', allocation: 12.02405 },
    { name: 'USDT', allocation: 10.23445 },
    { name: 'BADGER', allocation: 9.03152 },
    { name: 'DIGG', allocation: 7.93744 },
    { name: 'ibBTC', allocation: 7.05744 },
    { name: 'cvxCRV', allocation: 3.52554 },
  ];
  const { getByTestId } = render(<PastelChart data={data} />);
  expect(getByTestId('pastel-chart')).toBeInTheDocument();
});