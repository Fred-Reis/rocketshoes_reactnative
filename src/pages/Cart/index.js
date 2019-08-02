import React from 'react';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';

import * as cartActions from '../../store/modules/cart/actions';

import {
  Container,
  ImgProd,
  TextBox,
  DescProd,
  PriceProd,
  SubTotalBox,
  InputAmount,
  MinButton,
  MaxButton,
  SubTotal,
  ShowProd,
  TotalBox,
  Total,
  Value,
  FinishButton,
  ButtonBox,
  TextButton,
  DeleteButton,
  BigBox,
  List,
} from './styles';

function Cart({ cart, removeFromCart, updateAmount, total }) {
  Numeral.locale('pt-br');
  Numeral.defaultFormat('$0.00');

  function increment(item) {
    updateAmount(item.id, item.amount + 1);
  }

  function decrement(item) {
    updateAmount(item.id, item.amount - 1);
  }

  return (
    <Container>
      <List
        data={cart}
        keyExtractor={cart => String(cart.id)}
        renderItem={({ item }) => (
          <BigBox>
            <ShowProd>
              <ImgProd
                source={{
                  uri: item.image,
                }}
              />
              <TextBox>
                <DescProd>{item.title}</DescProd>
                <PriceProd>{Numeral(item.price).format()}</PriceProd>
              </TextBox>
              <DeleteButton onPress={() => removeFromCart(item.id)}>
                <Icon name="delete-forever" size={28} color="#7159c1" />
              </DeleteButton>
            </ShowProd>
            <SubTotalBox>
              <ButtonBox>
                <MinButton onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </MinButton>
                <InputAmount editable={false} value={String(item.amount)} />
                <MaxButton onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </MaxButton>
              </ButtonBox>
              <SubTotal>{Numeral(item.subtotal).format()}</SubTotal>
            </SubTotalBox>
          </BigBox>
        )}
      />

      <TotalBox>
        <Total>TOTAL</Total>
        <Value>{Numeral(total).format()}</Value>
      </TotalBox>
      <FinishButton>
        <TextButton>FINALIZAR PEDIDO</TextButton>
      </FinishButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
