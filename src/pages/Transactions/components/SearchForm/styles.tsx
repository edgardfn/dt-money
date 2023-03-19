import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    @media screen and (max-width: 767px) {
      div {
        display: none;
      }
    }
  }
`
export const ContainerText = styled.div``

export const ContainerItemsTransactionsCardsMobileVersion = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  display: none;

  @media screen and (max-width: 767px) {
    display: flex;
  }
`

export const TextItemsTransactionsCardsMobileVersion = styled.span``

export const TotalItemsTransactionsCardsMobileVersion = styled.span``
