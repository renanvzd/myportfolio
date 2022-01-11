import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 1.5rem;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
      gap: 1.5rem;
      grid-template-columns: 1fr;
    }
  }
`;
