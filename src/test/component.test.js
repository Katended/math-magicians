import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Quote from '../components/Quote';
import Calculator from '../components/Calculator';

it('renders Header correctly', () => {
  const tree = renderer.create(<Router><Header /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Home correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Quote correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Calculator correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
