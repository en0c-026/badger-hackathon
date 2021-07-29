import React from 'react';
import { render } from '@testing-library/react';
import AllocationCard from '../../Allocation/AllocationCard';

const AssetInfoDemo = [
  { name: 'WBTC', allocation: 50.22895 },
  { name: 'WETH', allocation: 12.02405 },
  { name: 'USDT', allocation: 10.23445 },
  { name: 'BADGER', allocation: 9.03152 },
  { name: 'DIGG', allocation: 7.93744 },
  { name: 'ibBTC', allocation: 7.05744 },
  { name: 'cvxCRV', allocation: 3.52554 },
];

describe('AllocationCard', () => {
  const props = {
    title: 'Asset Allocation',
    subtitle: 'Subtext',
    data: AssetInfoDemo,
    path: 'assets',
  };
  test('render the props in the AllocationCard component', () => {
    const { getByText } = render(<AllocationCard {...props} />);
    expect(getByText(props.title)).toHaveTextContent(props.title);
    expect(getByText(props.subtitle)).toHaveTextContent(props.subtitle);
  });
  test('check if the length of the children in list is equal to the length of the delivered data', () => {
    const { getByTestId } = render(<AllocationCard {...props} />);
    expect(getByTestId('items-list').children.length).toBe(props.data.length);
  });
});
