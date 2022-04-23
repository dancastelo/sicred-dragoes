import { useGlobalContext } from '../../../contexts';

import { Container } from '../container';
import { HeaderContent, HeaderStyle, Link, ButtonWrapper } from './style';

const Header = () => {
  const { signout } = useGlobalContext();

  return (
    <HeaderStyle>
      <Container>
        <HeaderContent>
          <Link to='/' >
            <h1 style={{ color: '#6389ae' }}>
              Dragões
            </h1>
          </Link>

          <ButtonWrapper>
            <button onClick={signout} className='btn-logout'>
              <p>Sair</p>
            </button>
          </ButtonWrapper>
        </HeaderContent>
      </Container>
    </HeaderStyle>
  )
}

export { Header }