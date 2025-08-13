import styled from "styled-components";

const Wrapper = styled.aside`
position: fixed;
inset: 0;
height:100%;
width: ${props => (props.isOpen ? '15rem' : '60px')};
max-width: 15rem;
background: var(--primary-400);
transition: width 0.3s ease-in-out;
header{
position: relative;
}
    .image{
        min-width: 3rem;
        display: flex;
        align-items: center;
    }
    img {
        width: 4rem
        border-radius: 6px;
    }
    .image-text {
        display: flex;
        align-items: center;
    }
    .image-text .header-text {
        display: flex;
        flex-direction: column;
    }
    .name {
        font-weight: 600;
    }
    .toggle-icon {
        position: absolute;
        top: 3.2rem;
        right: -15px;
        transform: translateY(-50%);
        width: 2rem;
        height: 2rem;
        background: var(--primary-400);
        color: var(--primary-800);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 0.4rem;
        cursor: pointer;
    }

    .menu-bar {
        margin-top: 1rem;
        padding: 0 1rem;
        transition: all 0.3s ease-in-out;
        opacity: ${props => (props.isOpen ? 1 : 0)};
        pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
        transition: opacity 0.2s 0.15s; /* delay fade-in until width transition is mostly done */
    }
    .menu-links {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export default Wrapper;