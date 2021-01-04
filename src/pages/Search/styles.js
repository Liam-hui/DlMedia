import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
`;

export const SearchBar = styled.View`
  margin-bottom:10px;
  padding-vertical:10px;
  width:90%;
  border-bottom-color: white;
  border-bottom-width: 0.5px;
  flex-direction:row;
  align-items:center;
`;

export const SearchInput = styled.TextInput`
  color:white;
  font-size:20px;
`;

export const Bubble = styled.View`
  height:40px;
  width: 140px;
  border-radius:20px;
  display:flex;
  justify-content:center;
  padding-horizontal:15px;
  margin-horizontal:8px;
  margin-vertical:10px;
`;

export const BubbleText = styled.Text`
  color:white;
  font-size:14px;
`;








