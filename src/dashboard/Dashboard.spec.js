// Test away
import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect'

import Dashboard from './Dashboard.js'
import Controls from '../controls/Controls.js'
import Display from '../display/Display.js'

describe('<Dashboard Component', () => {
it.skip(`matches snapshot`, () => {
const tree = renderer.create(<Dashboard />).toJSON()
expect(tree).toMatchSnapShot()
})

it('should show the controls', () => {
render(<Controls />)
})
it('should show unlocked', () => {
render(<Display />)
const { getByText } = render(<Display />)
const text = getByText(/Unlocked/i)
expect(text).toHaveTextContent(/Unlocked/i)
})

it('should show Lock gate', () => {
render(<Controls />)
const { getByText } = render(<Controls />)
const text = getByText(/Lock Gate/i)
expect(text).toHaveTextContent(/Lock Gate/i)
})

it('defaults to unlocked and open', () => {
render(<Controls />)
const { getByText } = render(<Display />)
//const unlocked = getByText(/unlocked/i)
getByText(/unlocked/i)
//expect(unlocked).toHaveTextContent(/unlocked/i)
expect(getByText(/open/i)).toHaveTextContent(/open/i)
})

it.skip('cannot be closed or opened if it is locked', () => {
render(<Controls />)
const { getByText } = render(<Controls />)
const openBtn = getByText(/open/i)
expect(openBtn).toBeDisabled()
const closeGate = getByText(/close gate/i)
const lockGate = getByText(/lock gate/i)
fireEvent.click(closeGate)
fireEvent.click(lockGate)
expect(openBtn).not.toBeDisabled()
})
})



