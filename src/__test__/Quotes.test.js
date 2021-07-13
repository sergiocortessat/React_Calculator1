import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quotes from '../Components/Quotes';

it('renders correctly the quotes component', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <Quotes />
        </BrowserRouter>
        <p>Testing the rendering of Quotes component using snapshot</p>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
