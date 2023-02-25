import { render, screen } from '@testing-library/react';
import Home from './index';
import '@testing-library/jest-dom'


describe('Home page', () => {
    test('renders correctly', () => {
        render(
            <Home/>
        )
        const headerElement = screen.getByRole('heading', {name: 'Todo List'})
        expect(headerElement).toBeInTheDocument()
    })
})