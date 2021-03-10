import { render, screen, queryByAttribute } from '@testing-library/react';
import App from './App';

const getById = queryByAttribute.bind(null, 'id');
const dom = render(<App />);

test ('user story #1. a wrapper element with id of quote-box', ()=> {
  const wrapperElement = getById(dom.container, 'quote-box');
  expect(wrapperElement).toBeInTheDocument();
})
