import { render, screen } from '@testing-library/react';
import Uis04 from './PracticeFiles/04/Uis';

test('renders learn react link', () => {
    render(<Uis04 />);
    const linkElement = screen.getByText(/ADD/i);
    expect(linkElement).toBeInTheDocument();
});