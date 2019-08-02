import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
`;

export const ShowProduct = styled.View`
  width: 220px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 15px;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const ImgProd = styled.Image`
  width: 200px;
  height: 200px;
`;
export const DescProd = styled.View`
  margin: 10px 3px;
`;

export const TitleProd = styled.Text`
  font-size: 15px;
`;
export const PriceProd = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #191915;
`;

export const CartButton = styled.View`
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  flex-direction: row;
`;

export const CartAmount = styled.Text`
  font-size: 15px;
  color: #fff;
  padding-left: 5px;
`;

export const ProdButton = styled.TouchableOpacity`
  border-radius: 4px;
  flex-direction: row;
  background: #7159c1;
  align-items: center;
  border: none;
  margin-top: auto;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  flex: 1;
`;
