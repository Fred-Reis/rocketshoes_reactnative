import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import {
  Container,
  Logo,
  BasketButton,
  MainButton,
  ItemAmount,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <MainButton onPress={() => navigation.navigate('Main')}>
        <Logo />
      </MainButton>
      <BasketButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#fff" size={24} />
        <ItemAmount>{cartSize}</ItemAmount>
      </BasketButton>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
