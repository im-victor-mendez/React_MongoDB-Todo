import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Task from "./Task";

describe('Task Common Component', () => {
    test('should be a task component initializing App', () => {
        render(<Task />)
        const task = screen.getByTestId('task')
        expect(task).toBeInTheDocument()
    })
})