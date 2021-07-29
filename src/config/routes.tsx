import { Route } from 'mobx-router';
import React from 'react';
import Portfolio from '../components/Portfolio';
import { RootStore } from '../mobx/store';
import { StoreContext } from './context';

const routes = {
  home: new Route<RootStore>({
    path: '/',
    component: <Portfolio context={StoreContext} />,
  }),
};

export default routes;
