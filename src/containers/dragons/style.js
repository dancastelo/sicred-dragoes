import styled from 'styled-components';

const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;

  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  padding: 26px; 

  flex: 1;
`;

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  margin-bottom: 0.8rem; 

  > button {
    max-height: 3.5rem;
  }
`;

const CardList = styled.ul`
  list-style: none;

  margin: 0 -12px;
`;

export { PageWrapper, Content, ContentTitle, CardList }