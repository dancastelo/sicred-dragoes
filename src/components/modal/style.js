import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Dialog = styled.div`
  --dialog-margin: 3.2rem;
  display: flex;
  align-items: center;
  
  max-width: 420px;
  min-height: calc(100% - 2 * var(--dialog-margin));

  margin: var(--dialog-margin) auto;

  @media (max-width: 440px){
    --dialog-margin: 1rem;
    margin: var(--dialog-margin);
  }
`;

const Content = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.secondary};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: ${props => props.theme.colors.color};
`;

const Footer = styled.div`
  padding: 1.6rem;
`;

const Body = styled.div`
  padding: 2.6rem 1.6rem;
`;

export { Backdrop, Dialog, Content, Header, Footer, Body }