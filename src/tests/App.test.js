import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from "../App";
import Tarea from "../componentes/Tarea";

describe('testing app component', () => {

  test('should render app component', () => {

    render(<App />)

    const title = screen.getByText('Tasks')

    expect(title).toBeInTheDocument()
  })

  test('should add a task', () => {

    render(<App />)

    const taskElement = screen.queryByText('Comprar comida')

    expect(taskElement).not.toBeInTheDocument()

    const inputElement = screen.getByRole('textbox')
    const buttonElement = screen.getByRole('button')

    userEvent.type(inputElement, 'Comprar comida')

    expect(inputElement.value).toBe('Comprar comida')

    userEvent.click(buttonElement)

    expect(inputElement.value).toBe('')

    const taskElementAgain = screen.getByText('Comprar comida')

    expect(taskElementAgain).toBeInTheDocument()
  })

  test('should delete a task', () => {

    render(<App />)

    const inputElement = screen.getByRole('textbox')

    userEvent.type(inputElement, 'Comprar comida')

    expect(inputElement.value).toBe('Comprar comida')

    const buttonElement = screen.getByRole('button')

    userEvent.click(buttonElement)

    expect(screen.getByText('Comprar comida')).toBeInTheDocument()

    const deleteBtnElement = screen.getByTestId('deleteBtn')

    userEvent.click(deleteBtnElement)

    expect(inputElement.value).toBe('')

    const taskElementAgain = screen.queryByText('Comprar comida')

    expect(taskElementAgain).not.toBeInTheDocument()
  })

  test('should change done/doing for a task', () => {

    const doneTask = jest.fn()
    const deleteTask = jest.fn()

    render(
      <Tarea 
        id='1' 
        texto='Comprar comida' 
        completada={false}
        completarTarea={doneTask}
        eliminarTarea={deleteTask}
      />
    )

    userEvent.click(screen.getByText('Comprar comida'))

    expect(doneTask).toHaveBeenCalledTimes(1)
    expect(deleteTask).toHaveBeenCalledTimes(0)
  })
})