import styled from 'styled-components'

export const ContainerTransactionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  background: ${(props) => props.theme['gray-700']};
  padding: 1.25rem 2rem;

  margin-top: 1.5rem;

  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  div {
    display: flex;
    justify-content: center;

    &:first-child {
      justify-content: flex-start;
    }
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`

export const ContainerDescription = styled.span`
  &::first-letter {
    text-transform: capitalize;
  }
`

export const ContainerCategoryAndDate = styled.div`
  /* width: 100%; */
  display: flex;

  span {
    svg {
      display: none;
    }

    &::first-letter {
      text-transform: capitalize;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: #7c7c8a;
      text-transform: capitalize;

      svg {
        display: flex;
      }
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &:last-child {
      justify-content: flex-end;
    }

    svg {
      display: none;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      color: #7c7c8a;

      svg {
        display: flex;
      }
    }
  }
`
