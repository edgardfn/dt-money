import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
  // totalPages: number
  setCurrentPage: (page: number) => void
  totalTransactions: number
  currentPage: number
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  // const [totalPages, setTotalPages] = useState(1)
  const [totalTransactions, setTotalTransactions] = useState(0)

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'createAt',
          _order: 'desc',
          q: query,
          _page: currentPage,
          _limit: 3,
        },
      })
      // setTotalTransactions(parseFloat(response.headers['x-total-count']))
      setTotalTransactions(parseFloat(response.headers['x-total-count']))
      setTransactions(response.data)
    },
    [currentPage],
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data

      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createAt: new Date(),
      })

      setTransactions((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
        setCurrentPage,
        totalTransactions,
        currentPage,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
