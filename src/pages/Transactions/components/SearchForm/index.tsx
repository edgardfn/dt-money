import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  ContainerItemsTransactionsCardsMobileVersion,
  ContainerText,
  SearchFormContainer,
  TextItemsTransactionsCardsMobileVersion,
  TotalItemsTransactionsCardsMobileVersion,
} from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  })
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
    reset()
  }
  return (
    <>
      <ContainerItemsTransactionsCardsMobileVersion>
        <TextItemsTransactionsCardsMobileVersion>
          Transações
        </TextItemsTransactionsCardsMobileVersion>
        <TotalItemsTransactionsCardsMobileVersion>
          4 itens
        </TotalItemsTransactionsCardsMobileVersion>
      </ContainerItemsTransactionsCardsMobileVersion>
      <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
        <input
          type="text"
          placeholder="Busque por transações"
          {...register('query')}
        />

        <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={20} />
          <ContainerText>Buscar</ContainerText>
        </button>
      </SearchFormContainer>
    </>
  )
}
