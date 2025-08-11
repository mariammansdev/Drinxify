import styled, {keyframes } from 'styled-components';


const pulseShadow = keyframes`
  0% {
    box-shadow: 0 0 10px var(--primary-200);
  }
  50% {
    box-shadow: 0 0 40px var(--primary-400);
  }
  100% {
    box-shadow: 0 0 10px var(--primary-600);
  }
`;

const Wrapper = styled.div`
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    width: 5rem;
    height: 5rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--primary-200);
    animation: ${pulseShadow} 2s infinite ease-in-out;
    padding: 1rem 2rem;
    transition: all 0.5s ease;
    overflow: hidden;
  }

  @media (max-width: 768px) {
      display: block;
  }
  .form:hover {
    width: 80%;
    border-radius: 30px;
    padding: 10px 20px;
    justify-content: space-between;
    animation-play-state: paused;
  }

  .form-input {
    display: none;
    opacity: 0;
    outline: none;
    border: none;
    font-weight: 500;
    background: transparent;
    transition: all 0.5s ease;
  }

  .form:hover .form-input {
    display: block;
    width: 400px;
    opacity: 1;
  }

  .btn {
    background: none;
    border: none;
    color: var(--primary-600);
    font-size: 1.5rem;
    transition: var(--transition);
    white-space: nowrap;
    box-shadow: none;
    align-self: center;
  }

`;

export default Wrapper;