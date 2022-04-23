import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../contexts';

import { Form } from '../../components';

const Login = () => {
	const usernameRef = useRef({});
	const passwordRef = useRef({});

	const global = useGlobalContext();
	const navigate = useNavigate();
	const location = useLocation();

	const handleButtonLogin = (e) => {
		e.preventDefault();

		const username = usernameRef.current.value;
		const password = passwordRef.current.value;

		if (username === 'master' && password === '123456') {
			const hasPrevRoute = location && location.state && location.state.from;
			const route = hasPrevRoute ? location.state.from.pathname : '/';

			global
				.signin(username)
				.then(() => {
					navigate(route, { replace: true });
				});
		}
	}

	return (
			<div className='box'>
				<div className='coluna coluna-esquerda'>
					<h2>Bem-vindo(a) ao<br/> <span>Challenge Dragon</span></h2>

					<Form>
						<Form.Row>
							<Form.Input
								ref={usernameRef}
								type='text'
								aria-label='login'
								placeholder="Digite seu Login"
							/>
						</Form.Row>

						<Form.Row>
							<Form.Input
								ref={passwordRef}
								type='password'
								aria-label='password'
								placeholder="Digite sua Senha"
							/>
						</Form.Row>

						<Form.Row>
							<button
								fullWidth
								onClick={handleButtonLogin}
							>
								Login
							</button>
						</Form.Row>
					</Form>
				</div>

				<div className='coluna coluna-direita'>
					<img src='dragon.jpg' alt='imagem dragão' />
				</div>
			</div>
	)
}

export { Login }