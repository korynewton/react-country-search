import styled from 'styled-components';

const FilterContainer = styled.div`
    position: relative;
    z-index: 1;
    display flex;
    flex-direction: column;
    max-width: 91%;
    margin: 0 auto;
    height: 29rem;
    @media (min-width: 1000px) {
        flex-direction:row;
        max-width:89%;
        justify-content:space-between;
        height: unset;
        margin-bottom: 4rem;
      }
`;

export default FilterContainer;
