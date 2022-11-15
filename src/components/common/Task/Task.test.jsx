import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Task from "./Task";

describe('Task Common Component', () => {
    test('should be a task component initializing App', () => {
        render(<Task />)
        const task = screen.getByTestId('task')
        expect(task).toBeInTheDocument()
    })

    describe('Content', () => {
        test('should have title', () => {
            const titleContent = 'Task title'

            render(<Task title={titleContent} />)
            const title = screen.getByTestId('task-title')

            expect(title).toHaveTextContent(titleContent)
        })

        test('should have description', () => {
            const descriptionContent = 'Task description'

            render(<Task description={descriptionContent} />)
            const description = screen.getByTestId('task-description')

            expect(description).toHaveTextContent(descriptionContent)
        })
    })
})