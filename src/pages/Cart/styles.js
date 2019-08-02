import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  max-height: 100%;
  padding-bottom: 40px;
`;

export const BigBox = styled.View``;

export const ShowProd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImgProd = styled.Image`
  height: 80px;
  width: 80px;
`;
export const TextBox = styled.View`
  width: 190px;
  margin: 10px;
  padding: 10px;
`;

export const DescProd = styled.Text`
  color: #191912;
  font-size: 15px;
`;

export const PriceProd = styled.Text`
  margin: 5px 0;
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const SubTotalBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: #eee;
  border: none;
  border-radius: 4px;
`;

export const ButtonBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputAmount = styled.TextInput`
  color: #000;
  background: #fff;
  border: 1px solid #ddd;
  margin: 0 10px;
  padding: 0 0 0 5px;

  border-radius: 4px;
  width: 50px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const MinButton = styled.TouchableOpacity``;

export const MaxButton = styled.TouchableOpacity``;

export const DeleteButton = styled.TouchableOpacity``;

export const SubTotal = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 16px;
`;

export const TotalBox = styled.View`
  align-items: center;
  margin: 30px;
`;

export const Total = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Value = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

export const FinishButton = styled.TouchableOpacity`
  background: #7159c1;
  border: none;

  padding: 10px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
