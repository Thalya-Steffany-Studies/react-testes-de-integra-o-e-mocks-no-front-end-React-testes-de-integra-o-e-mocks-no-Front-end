import { BrowserRouter } from 'react-router-dom';
import App from './paginas/Principal/App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRoutes from './routes';

describe('Routes', () => {
  it('Should be access principal route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const app = screen.getByText('Nova Transação');

    expect(app).toBeInTheDocument();
  });

  it('Should be render not founded page', () => {
    render(
      <MemoryRouter initialEntries={['/xpto']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const notFoundedPage = screen.getByText('Ops! Não encontramos a página');
    expect(notFoundedPage).toBeInTheDocument();
  });

  it('Should be render render cards page', () => {
    render(
      <MemoryRouter initialEntries={['/cartoes']}>
        <AppRoutes />
      </MemoryRouter>
    );

    const cardsPage = screen.getByText('Meus cartões');
    expect(cardsPage).toBeInTheDocument();
  });
});
