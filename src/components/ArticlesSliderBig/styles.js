import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ItemWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal:5px;
`;

export const StyledItem = styled.View`
  height: 435px;
  width: 270px;
  align-items:center;
  margin-horizontal: 14px;
  border-radius:10px;
  overflow:hidden;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  height:70px;
  font-family: Avenir-Regular;
`;

export const TimeTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:3px;
`;

export const TimeText = styled.Text`
  color: ${colors.white};
  font-size:12px;
  font-family: PingFang-HK-Light;
`;

export const CategoryText = styled.Text`
  color: ${colors.white};
  font-size:12px;
  font-family: Avenir-Heavy;
`;


export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 8px;
  margin-right: 8px;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: 100%;
`;