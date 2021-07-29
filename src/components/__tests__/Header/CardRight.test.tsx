import React from 'react';
import { render } from '@testing-library/react';
import CardRight from '../../Header/CardRight';

test('successfully render the accessories in the CardRight component.', () => {
  const props = {
    boost: 2.55,
    boostRank: 454,
  };
  const { getByText } = render(<CardRight {...props}/>);
  expect(getByText(props.boost)).toHaveTextContent(props.boost.toString());
  expect(getByText(props.boostRank)).toHaveTextContent(props.boostRank.toString());
});