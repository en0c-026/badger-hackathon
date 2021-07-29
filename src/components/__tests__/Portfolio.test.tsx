import React, { createContext } from 'react';
import { render } from '@testing-library/react';
import Portfolio from '../Portfolio';
import { RootStore } from '../../mobx/store';

describe('Portfolio', () => {
  const TestStoreContext = createContext({} as RootStore);
  const TestStoreProvider = TestStoreContext.Provider;

  test('render the Portfolio component with conditional loading', () => {
    const testStore = new RootStore({ testMod: true });
    testStore.loading = true;
    const { getByTestId } = render(
    <TestStoreProvider value={testStore}>
        <Portfolio context={TestStoreContext}/>
    </TestStoreProvider>
    );
      expect(getByTestId('loading')).toBeInTheDocument();
  });
  test('render the Portfolio component with conditional networkError', () => {
    const testStore = new RootStore({ testMod: true });
    testStore.networkError = true;
    const { getByTestId } = render(
      <TestStoreProvider value={testStore}>
        <Portfolio context={TestStoreContext} />
      </TestStoreProvider>
    );
    expect(getByTestId('network-error')).toBeInTheDocument();
  });
  test('render the Portfolio component without conditionals', () => {
    const testStore = new RootStore({ testMod: true });
    const { getByTestId } = render(
      <TestStoreProvider value={testStore}>
        <Portfolio context={TestStoreContext} />
      </TestStoreProvider>
    );
    expect(getByTestId('portfolio')).toBeInTheDocument();
  });
});