import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'

import TechList from '~/components/TechList'
import { addTech } from '~/store/modules/techs/actions'

jest.mock('react-redux')

describe('TechList component', () => {
  it('should render tech list', () => {
    useSelector.mockImplementation(cb => cb({
      techs: ['Node.js', 'React.js']
    }))

    const { getByTestId, getByText } = render(<TechList />)

    expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'))
    expect(getByTestId('tech-list')).toContainElement(getByText('React.js'))
  });

  it('should be able to add new tech', () => {
    const { getByTestId, getByLabelText } = render(<TechList />)
    const dispatch = jest.fn()

    useDispatch.mockReturnValue(dispatch)

    fireEvent.change(getByLabelText('Tech'), { target: { value: 'React Native' } })
    fireEvent.submit(getByTestId('tech-form'))

    expect(dispatch).toHaveBeenCalledWith(addTech('React Native'));
  })
});
