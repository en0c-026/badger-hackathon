import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../Header';
import { RootStore } from '../../../mobx/store';

test('check if the Header component renders its children', () => {
  const testStore = new RootStore({ testMod: true });
  const { getByTestId } = render(<Header store={testStore} />);
  expect(getByTestId('card-left')).toBeInTheDocument();
  expect(getByTestId('card-center')).toBeInTheDocument();
  expect(getByTestId('card-right')).toBeInTheDocument();
});