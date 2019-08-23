import styled from 'styled-components';

export const Ul = styled.ul`
  display: grid;
  grid-gap: 20px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
`;

export const Li = styled.li`

`;

export const Nav = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #4d4d4d;
  position: relative;
`;

export const A = styled.a`
  background-color: #4d4d4d;
  display: block;
  text-decoration: none;
  padding: 0.8rem;
  text-align: center;
  color: white;
  text-transform: uppercase;
  font-size: 1.1rem;
  box-shadow: black;
  :hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;