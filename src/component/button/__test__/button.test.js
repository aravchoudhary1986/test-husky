import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../button'

describe('Button', () => {
    let component = null

    beforeEach(() => {
        component = render(<Button />)
    })

    afterEach(() => {
        component = null
    })

    it('Is button component exsist', () => {
        expect(component).not.toBeNull()
    })
})
