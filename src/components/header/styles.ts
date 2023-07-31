import { styled } from "styled-components";

export const Cointaner = styled.div`
    padding: 1.5rem 2rem;
    color: ${(props) => props.theme.text};
    font-size: .75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-weight: 300;
        font-size: 1.5rem;
    }
    ul {
        list-style: none;
        li {
            font-size: 1rem;
        }
    }
`