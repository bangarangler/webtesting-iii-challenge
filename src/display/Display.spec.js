// Test away!
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'

import Display from './Display.js'

describe('Display Component', () => {
it.skip('matches snapshot', () => {
const tree = renderer.create(<Display />).toJSON()
expect(tree).toMatchSnapShot()
})

it('displays if gate is open/unlocked', () => {
//render(<Controls />)
const { getByText } = render(<Display closed={false} />)
expect(getByText(/open/i)).toHaveTextContent(/open/i)
//const closedMock = jest.fn(() => true)
//const openBtn = getByText(/open/i)
//fireEvent.click(closedMock)
expect(getByText(/unlocked/i)).toHaveTextContent(/unlocked/i)
})

it('displays if gate is locked or closed', () => {
const { getByText } = render(<Display locked={true} closed={true} />)
expect(getByText(/^locked/i)).toHaveTextContent(/^locked/i)
expect(getByText(/close/i)).toHaveTextContent(/close/i)
})

it('display closed if closed prop is true otherwise open', () => {
const { getByText } = render(<Display closed={true}/>)
//const closeBtn = document.querySelector('.closedClass')
expect(getByText(/closed/i)).toHaveTextContent(/closed/i)
})

it('display open if open prop is false otherwise open', () => {
const { getByText } = render(<Display closed={false} />)
expect(getByText(/open/i)).toHaveTextContent(/open/i)
})


it('display locked if the locked prop is true and unlocked otherwise', () => {
const { getByText } = render(<Display locked={true}/>)
expect(getByText(/^locked/i)).toHaveTextContent(/^locked/i)
})

it('display unlocked if the locked prop is false and locked otherwise', () => {
const { getByText } = render(<Display locked={false} />)
expect(getByText(/unlocked/i)).toHaveTextContent(/unlocked/i)
})

it('when locked use red-led class', () => {
const { getByText } = render(<Display locked={true} />)
expect(getByText(/locked/i)).toHaveClass('red-led')

})

it('when closed use red-led class', () => {
const { getByText } = render(<Display closed={true} />)
expect(getByText(/closed/i)).toHaveClass('red-led')
})

it('when  open use green-led class', () => {
  const { getByText } = render(<Display closed={false}/>)
  expect(getByText(/open/i)).toHaveClass('green-led')
})

it('when  unlocked use green-led class', () => {
  const { getByText } = render(<Display locked={false}/>)
  expect(getByText(/unlocked/i)).toHaveClass('green-led')
})
})
