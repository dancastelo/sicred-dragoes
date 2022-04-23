import styled from 'styled-components';

const Input = styled.input`
	outline: none;

	display: block;
	width: 100%;
	height: 42px;
	font-size: 16px;
	border: 0;
	background: transparent;

	border-bottom: 1px solid #01131d;
	color: ${props => props.theme.colors.color};
	opacity: 0.7;
	transition: opacity 0.2s;

	:focus {
		opacity: 1;
	}
`;

export { Input }