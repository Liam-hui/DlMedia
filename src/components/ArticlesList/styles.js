import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  margin-vertical: 10px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StyledItem = styled.View`
  align-items: center;
  height: 120px;
  align-items: center;
  width: 100%;
  flex-direction: row;
  margin-vertical: 12px;
`;

export const ItemInfo = styled.View`
  flex:1;
  padding-horizontal:10;
  margin-left: 5px;
`;

export const TypeText = styled.Text`
  color: ${colors.dark};
  font-size: 11px;
  font-family: Avenir-Heavy;
  margin-left:2px;
  margin-bottom:4px;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  line-height:24px;
  font-family: Avenir-Regular;
  height:50px;
`;

export const TimeTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:2px;
`;

export const TimeText = styled.Text`
  color: ${colors.dark};
  font-size:11px;
  margin-right: 5px;
  font-family: Avenir-Regular;
`;

export const OptionText = styled.Text`
  color: ${colors.white};
  font-size:10px;
  margin-right:3px;
`;

export const Sep = styled.View`
  background-color:${colors.dark};
  width: 1px;
  height: 100%;
  margin-left: 5px;
  margin-right: 10px;
`;

