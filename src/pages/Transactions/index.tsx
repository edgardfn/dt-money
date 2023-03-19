import { WarningCircle } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
// import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import { TransactionCard } from './components/TransactionCard'
import {
  ContentTransactions,
  NotFoundContainer,
  TransactionsContainer,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <ContentTransactions>
          {transactions.length > 0 ? (
            transactions.map((transaction) => {
              return (
                <TransactionCard
                  key={transaction.id}
                  transaction={transaction}
                />
              )
            })
          ) : (
            <NotFoundContainer>
              <WarningCircle size={32} weight="bold" />
              Transações não encontradas
            </NotFoundContainer>
          )}
        </ContentTransactions>
        {/* <TransactionsTable>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createAt))}
                    </td>
                  </tr>
                )
              })
            ) : (
              <tr>
                <NotFoundContainer>
                  <WarningCircle size={32} weight="bold" />
                  Transações não encontradas
                </NotFoundContainer>
              </tr>
            )}
          </tbody>
        </TransactionsTable> */}
      </TransactionsContainer>
      <Pagination />
    </div>
  )
}
