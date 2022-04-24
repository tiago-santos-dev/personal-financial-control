import GlobalStyle from '@styles/global';
import theme from '@styles/theme';
import { createServer, Model } from 'miragejs';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          type: 'deposit',
          category: 'Receita Fixa',
          amount: 7350,
          createdAt: new Date()

        },
        {
          id: 2,
          title: 'Curso de NextJS',
          type: 'withdraw',
          category: 'Educação',
          amount: 899,
          createdAt: new Date()

        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
)

export default MyApp;
