import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1051px) {
      gap: 1rem;
    }

    @media (max-width: 1050px) {
      flex-direction: column;
      margin-top: 5rem;
      padding-bottom: 3rem;
      gap: 2rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 1rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    max-width: 20rem;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.35rem ;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 3rem;
  }

  @media (max-width: 1100px) {
    > div {
      height: 18rem;
      padding-top: 1.5rem;
      max-width: 18rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 1050px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;
      max-width: 100%;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;
