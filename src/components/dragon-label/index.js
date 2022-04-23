import styled from 'styled-components';

const colors = {
  fogo: '#DA5932',
  luz: '#F9D27A',
  gelo: '#55b6db',
  root: '#5F4126',
  agua: '#1FB5B5',
  dark: '#7A2F7C',
}

const dragonsColors = new Proxy(colors, {
  get: (target, prop) => target.hasOwnProperty(prop) ? target[prop] : '#d4d4d4'
})

const DragonLabel = styled.span`
  display: inline-block;
  max-width: 100%;
  padding: 6px 12px;
  background: ${props => `${dragonsColors[props.variant]}44`};
  border: 1px solid ${props => dragonsColors[props.variant]};
  border-radius: 4px;
  
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 14px;
`;

export { DragonLabel }