import React from 'react';
import { render } from '@testing-library/react';
import HeaderRow from '../../../Balances/TableBalances/HeaderRow';
import { Table, TableHead } from '@material-ui/core';

test('successfully render the props in the HeaderRow component.', () => {
  const props = {
    col1: 'Tokens',
    col2: 'Portfolio % Alloc.',
    col3: 'Price',
    col4: 'Balance',
  };
  const { getByText } = render(
    <Table>
      <TableHead>
        <HeaderRow {...props} />
      </TableHead>
    </Table>
  );
  expect(getByText(props.col1)).toHaveTextContent(props.col1);
  expect(getByText(props.col1)).toHaveTextContent(props.col1);
  expect(getByText(props.col2)).toHaveTextContent(props.col2);
  expect(getByText(props.col3)).toHaveTextContent(props.col3);

});