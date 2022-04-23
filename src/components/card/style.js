import styled from 'styled-components';

const CardStyle = styled.li`
  position: relative;
  display: inline-block;

  --items-by-row: 4;
  width: calc((100% - var(--items-by-row) * 24px) / var(--items-by-row));

  margin: 12px;
  padding: 12px;
  background: #01131d;
  
  border: 0;
  border-radius: 4px;
  text-align: center;

  @media (max-width: 940px) {
		--items-by-row: 3;
	}

  @media (max-width: 750px) {
		--items-by-row: 2;
	}

  @media (max-width: 520px) {
		--items-by-row: 1;
	}
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.8rem;
  right: 0.8rem;
  transition: opacity 0.3s ease-in;

  > :last-child {
    margin-left: 0.8rem;
  }

  @media (max-width: 600px){
    opacity: 1;
  }
`;

const Checkbox = styled.input`
  width: 1.8rem;
  height: 1.8rem; 
`;

const IconButton = styled.span`
  padding: 0.4rem;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 0;
  color: ${props => props.theme.colors.color};

  :hover{
    color: ${props => props.theme.colors.colorSecondary};
  }
`;

const Name = styled.span`
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  cursor: pointer;  

  > h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Square Peg';
    text-transform: 'capitalize';
    font-size: 45px;
  }
`;

export { Buttons, CardStyle, Checkbox, IconButton, Name }