import { Transaction } from '../../../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import {
  ContainerCategoryAndDate,
  ContainerDescription,
  ContainerTransactionCard,
  PriceHighlight,
} from './styles'
import { TagSimple, CalendarBlank } from 'phosphor-react'

interface TransactionCardProps {
  transaction: Transaction
}

export function TransactionCard({ transaction }: TransactionCardProps) {
  return (
    <ContainerTransactionCard>
      <ContainerDescription>{transaction.description}</ContainerDescription>
      <PriceHighlight variant={transaction.type}>
        {transaction.type === 'outcome' && '- '}
        {priceFormatter.format(transaction.price)}
      </PriceHighlight>
      <ContainerCategoryAndDate>
        <span>
          <TagSimple size={16} />
          {transaction.category}
        </span>
        <div>
          <CalendarBlank size={16} />
          {dateFormatter.format(new Date(transaction.createAt))}
        </div>
      </ContainerCategoryAndDate>
    </ContainerTransactionCard>
  )
}
