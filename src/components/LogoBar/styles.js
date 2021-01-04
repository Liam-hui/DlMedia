import styled from 'styled-components/native';
import { colors } from '@/styles';

export const TabbarWrapper = styled.View`
  height: 30px;
  flex-direction: row;
  align-items:center;
  padding-top: 15px;
`;

export const Dot = styled.View`
  width:4px;
  height: 4px;
  border-radius:2px;
  margin-horizontal: 5px;
  background-color:white;
`;

export const DotsWrapper = styled.View`
  flex-direction:row;
  margin-left:5px;
`;

export const LogoWrapper = styled.View`
  flex-direction: column;
  align-items:center;
  justify-content: center;
`;

export const LogoTextWrapper = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content: center;
`;

export const LogoText = styled.Text`
  color: white;
  font-size: 12px;
  font-family:NotoSerifTC-Regular;
`;

