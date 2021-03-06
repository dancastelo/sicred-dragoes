import styled from "styled-components";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > :last-child {
    margin-left: 0.8rem;
  }
`;

const Dismiss = styled.div`
  padding: 0.6rem;
  cursor: pointer;
`;

export { ButtonsWrapper, Dismiss }