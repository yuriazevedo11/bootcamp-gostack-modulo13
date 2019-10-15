import React from 'react';
import { useSelector } from 'react-redux'
import { render } from '@testing-library/react';

import TechList from '~/components/TechList';
import { jsxAttribute, jsxText } from '@babel/types';

jest.mock('react-redux');

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'React.js'],
    }));

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    expect(getByTestId('tech-list')).toContainElement(getByText('React.js'));
  });
});
