import styled from 'styled-components';
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  border-radius: var(--borderRadius);
  display: grid;
  grid-template-rows: auto 1fr;
  transition: var(--transition);
  &:hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 12rem;
    object-fit: fill;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.5rem;
    h4,h5 {
    margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500)
    }
  }
`;

export default Wrapper;
