import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TrButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <TransactionType>
            <TrButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TrButton>

            <TrButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TrButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
