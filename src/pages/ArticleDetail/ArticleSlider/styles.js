import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  margin-bottom:30px;
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
  height: 220px;
  width: 150px;
  align-items:center;
  margin-horizontal: 6px;
  border-radius:10px;
  overflow:hidden;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: Avenir-Regular;
`;

export const TimeTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:3px;
`;

export const TimeText = styled.Text`
  color: ${colors.white};
  font-size:9px;
  font-family: PingFang-HK-Light;
`;

export const UpvoteText = styled.Text`
  color: white;
  font-size:12px;
  font-family: Avenir-Medium;
`;


export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 4px;
  margin-right: 4px;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: 100%;
`;