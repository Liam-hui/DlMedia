import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  padding-top:20px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StyledItem = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const ItemInfo = styled.View`
`;

export const TypeText = styled.Text`
  color: ${colors.dark};
  font-size: 12px;
  font-family: Avenir-Heavy;
  margin-left:2px;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-family: Avenir-Regular;
  margin-bottom: 0px;
  height:53px;
`;

export const OtherInformationTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:3px;
`;


export const OtherInformationText = styled.Text`
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

