import { render, screen } from '@testing-library/react';
import Home from './index';
import { ThemeProvider } from '../Context/ThemeContext'
import { ThemeContext } from '../Context/ThemeContext'
import '@testing-library/jest-dom'


describe('Home page', () => {
    test('renders correctly', () => {
        render(
        <ThemeProvider value={ThemeContext}>
            <Home/>
        </ThemeProvider>)
        const headerElement = screen.getByRole('heading', {name: 'Todo List'})
        expect(headerElement).toBeInTheDocument()
    })
})