import styled from 'styled-components';

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  position: relative:
  z-index: 0;  

  @media (min-width:1000px) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 2rem;
    max-width:89%;
    margin: 0 auto;
  }
`;

export default CountriesContainer;
