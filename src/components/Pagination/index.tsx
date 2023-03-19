import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import {
  ContainerButtons,
  ContainerQuantity,
  ContentContainer,
  PaginationContainer,
} from './styles'

export function Pagination() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const setCurrentPage = useContextSelector(TransactionsContext, (context) => {
    return context.setCurrentPage
  })
  const totalTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.totalTransactions
    },
  )
  const currentPage = useContextSelector(TransactionsContext, (context) => {
    return context.currentPage
  })

  const totalPages = Math.ceil(totalTransactions / 3)

  const rows = []
  for (let i = 1; i <= totalPages; i++) {
    rows.push(i)
  }

  function handleClickNextPage(page: number) {
    setCurrentPage(page)
  }

  const numberOfTransactions = transactions.length

  return (
    <PaginationContainer>
      <ContentContainer>
        <ContainerQuantity>
          <strong>{numberOfTransactions}</strong> - <strong>3</strong> de{' '}
          <strong>{totalTransactions}</strong>
        </ContainerQuantity>
        <ContainerButtons>
          {rows.map((page) => {
            return (
              <button
                onClick={() => handleClickNextPage(page)}
                key={page}
                disabled={currentPage === page}
              >
                {page}
              </button>
            )
          })}
        </ContainerButtons>
      </ContentContainer>
    </PaginationContainer>
  )
}
