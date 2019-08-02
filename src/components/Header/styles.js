import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #141419;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resize: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketButton = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  height: 24px;
  width: 24px;
`;

export const ItemAmount = styled.Text`
  position: absolute;
  background: #7159c1;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 12px;
  overflow: hidden;
  padding: 2px;
  top: -8px;
  right: -8px;
`;

export const MainButton = styled.TouchableOpacity``;
