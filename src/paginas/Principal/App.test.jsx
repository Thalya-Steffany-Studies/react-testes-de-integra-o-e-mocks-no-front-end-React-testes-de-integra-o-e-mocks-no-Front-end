import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import AppRoutes from '../../routes'

describe('App', () => {
   it("Should be render new value into 'Extrato' after to add a new transation", () => {
    render(<App />, { wrapper: BrowserRouter })
    
    //Cmp nova transação
    const transaction = {
        selectOptions: screen.getByTestId('select-opcoes'),
        input: screen.getByPlaceholderText('Digite um valor'),
        button: screen.getByText('Realizar transação'),
        deposit: '30'
    }
    
    userEvent.selectOptions(transaction.selectOptions, 'Depósito')
    userEvent.type(transaction.input, transaction.deposit)
    userEvent.click(transaction.button)

    const statement = screen.getByTestId('lista-transacoes')
    expect(statement).toHaveTextContent(`R$ ${transaction.deposit}`)
   })

   it('', () => {
        render(
            <MemoryRouter initialEntries={['/investimentos']}>
                <AppRoutes />
            </MemoryRouter>
        )

        const servicesLink = screen.getByRole('link', { name: 'Serviços' })

        userEvent.click(servicesLink)
        const location = screen.getByTestId('location-pathname')

        expect(location).toContainHTML('<noscript data-testid="location-pathname">/servicos</noscript>')
    })
})
/*
    O que ele fez para testar a API?
     - transformou o fetch em um mock
     - criou uma função fake que simulasse o comportamento de uma chamada
        - criou um promisse que quando resolvida retorna os dados passados como argumentos 
     - criou um array contendo uma simulação dos dados esperados
     - chamou as funções e dados mockados
*/