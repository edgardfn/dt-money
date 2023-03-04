import styled from 'styled-components'

export const PaginationContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContainerQuantity = styled.div``

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  button {
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
