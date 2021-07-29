import React from 'react';
import { render } from '@testing-library/react';
import CardLeft from '../../Header/CardLeft';
import { formatNumber } from '../../../utils';

test('successfully render the accessories in the CardLeft component.', () => {
  const props = { 
    value: 1550122.106623, 
    earnedValue: 14221.44572, 
    earnedValuePercent: 14.054551, 
    earnedBadgerValue: 105.121245,
  };
  const { getByText, getByTestId } = render(<CardLeft {...props} />);
  expect(getByTestId('net-worth')).toHaveTextContent(formatNumber(props.value));
  expect(getByText(formatNumber(props.earnedValue))).toHaveTextContent(formatNumber(props.earnedValue));
  expect(getByText(`${props.earnedValuePercent.toFixed(3)}%`)).toHaveTextContent(`${props.earnedValuePercent.toFixed(3)}%`);
  expect(getByText(props.earnedBadgerValue.toFixed(2))).toHaveTextContent(props.earnedBadgerValue.toFixed(2));
});