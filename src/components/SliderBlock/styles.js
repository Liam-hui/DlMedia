import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  padding-bottom:25px;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ItemWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  padding-horizontal:15px;
`;

export const StyledItem = styled.View`
  height: 255px;
  width: 170px;
  align-items:center;
  margin-horizontal: 8px;
  border-radius:10px;
  overflow:hidden;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-family: Avenir-Regular;
  margin-bottom: 5px;
`;

export const OtherInformationTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:3px;
`;


export const OtherInformationText = styled.Text`
  color: ${colors.white};
  font-size:11px;
  margin-right: 5px;
  font-family: Avenir-Medium;
`;

export const OptionText = styled.Text`
  color: ${colors.white};
  font-size:10px;
  margin-right:3px;
`;

export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 3px;
  margin-right: 5px;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: 100%;
`;