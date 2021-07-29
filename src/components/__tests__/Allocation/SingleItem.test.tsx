import React from 'react';
import { render } from '@testing-library/react';
import SingleItem from '../../Allocation/SingleItem';

describe('SingleItem', () => {
  const props = {
    name: 'crvTricrypto',
    allocation: 55.121155,
    path: 'assets',
  };
  test('successfully render the props in the SingleItem component.', () => {
    const { getByText } = render(<SingleItem {...props} />);
    expect(getByText(props.name)).toHaveTextContent(props.name);
    expect(getByText(`${props.allocation.toFixed(1)}%`)).toHaveTextContent(`${props.allocation.toFixed(1)}%`);
  });

  test('correctly render the logo corresponding to the asset in the SingleItem component', () => {
    const { getByTestId } = render(<SingleItem {...props} />);
    expect(getByTestId(`asset-logo-${props.name}`).children[0]).toHaveAttribute('src', `/img/${props.path}/${props.name}.png`);
  });
});