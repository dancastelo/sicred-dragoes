import styled from 'styled-components';
import { Button } from './button';
import { Input } from './input';
import { Switch } from './switch';

const Label = styled.label`
	font-weight: 600;
	margin-bottom: 0.6rem;
`;

const Row = styled.div`
	width: 100%;

	margin-bottom: 2.6rem;

	:last-child{
		margin: 0;
	}

	@media(max-width: 600px){
		margin-bottom: 3.2rem;
	}
`;

const Form = styled.form``;

Object.assign(Form, { Row, Button, Input, Label });

export { Form, Input, Button, Switch }