// Test away!
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'

import Dashboard from '../dashboard/Dashboard.js'
import Controls from '../controls/Controls.js'

describe('Controls Component', () => {
it.skip(`matches snapshot`, () => {
const tree = renderer.create(<Controls />).toJSON()
expect(tree).toMatchSnapShot()
})

it('provide button to toggle the closed and locked states', () => {
const { getByText } = render(<Controls />)
expect(getByText(/close gate/i)).toBeInTheDocument()
expect(getByText(/lock gate/i)).toBeInTheDocument()
})

it('buttons text changes to reflect the state the door will be in if clicked', () => {
//const openMock = jest.fn(({closed: true}) )
const { getByText } = render(<Dashboard />)
const gateCloseBtn = getByText(/close gate/i)
expect(gateCloseBtn).toHaveTextContent(/close gate/i)
fireEvent.click(gateCloseBtn)
//const button = getByText(/open gate/i)
expect(getByText(/open gate/i)).toHaveTextContent(/open gate/i)
//expect(button).toHaveTextContent(/open gate/i)
//getByText(/open gate/i)
})

it('lock toggle button is disabled if gate is open', () => {
//const {getByText} = render(<Controls closed={true}/>)
//expect(getByText(/))
const mockClosed = jest.fn()
const {getByText} = render(<Controls toggleClosed={mockClosed} closed={false} />)
const button = getByText(/lock gate/i)
expect(button).toBeDisabled()
fireEvent.click(button)
expect(mockClosed).not.toHaveBeenCalled()
})

it('open gate  button is disabled if gate is closed', () => {
const mockFn = jest.fn()
const { getByText } = render(<Controls toggleLocked={mockFn} closed={true} locked={true} />)
const button = getByText(/open gate/i)
expect(button).toBeDisabled()
fireEvent.click(button)
expect(mockFn).not.toHaveBeenCalled()
})
})
