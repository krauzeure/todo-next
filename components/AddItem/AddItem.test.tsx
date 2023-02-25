import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../Context/ThemeContext';
import { ThemeContext } from '../../Context/ThemeContext';
import '@testing-library/jest-dom';
import AddItem from './AddItem';
import user from '@testing-library/user-event';

describe('AddItem component', () => {
  test('renders correctly', () => {
    render(<AddItem />);

    const formElement = screen.getByRole('form', { name: 'Ajouter un item' });
    expect(formElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    const formSubmit = screen.getByRole('button');
    expect(formSubmit).toBeInTheDocument();
  });
});
