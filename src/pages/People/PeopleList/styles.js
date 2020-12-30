import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  background-color: #28262F;
  width: 100%;
  padding-bottom:60px;
`;

export const Column = styled.View`
  width: 50%;
  padding-horizontal:10px;
  align-items:center;
`;

export const TopGradientWrapper = styled.View`
  position:absolute;
  height: 100;
  width: 100%;
`;

export const StyledItem = styled.View`
  border-radius:15px;
  overflow:hidden;
  margin-bottom:24px;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: 100%;
`;

export const OtherInformationTextWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left:8px;
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

export const TitleText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: Avenir-Regular;
`;

export const ContentText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-weight:bold;
  font-family: Avenir-Regular;
`;

export const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Sep = styled.View`
  background-color:${colors.white};
  width: 1px;
  height: 100%;
  margin-left: 3px;
  margin-right: 5px;
`;
