import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import { connect } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';

import api from '../../services/api';

import {
  Container,
  ShowProduct,
  DescProd,
  TitleProd,
  PriceProd,
  ProdButton,
  ImgProd,
  CartButton,
  TextButton,
  CartAmount,
  List,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({ products: response.data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    Numeral.locale('pt-br');
    Numeral.defaultFormat('$0.00');

    return (
      <Container>
        <List
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ShowProduct>
              <ImgProd
                source={{
                  uri: item.image,
                }}
              />
              <DescProd>
                <TitleProd>{item.title}</TitleProd>
                <PriceProd>{Numeral(item.price).format()}</PriceProd>
              </DescProd>
              <ProdButton onPress={() => this.handleAddProduct(item.id)}>
                <CartButton>
                  <Icon name="add-shopping-cart" color="#fff" size={20} />
                  <CartAmount>{amount[item.id] || 0}</CartAmount>
                </CartButton>
                <TextButton>ADICIONAR</TextButton>
              </ProdButton>
            </ShowProduct>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
