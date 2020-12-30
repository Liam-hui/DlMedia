import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  height: 600px;
`;

export const BackText = styled.Text`
  color: ${colors.white};
  font-size:18px;
  font-family: Avenir-Medium;
`;

export const TopIcon = styled.Image`
  height:22px;
  width:22px;
  opacity:1;
  marginLeft:12px;
`;

export const Row = styled.View`
  flex-direction:row;
  align-items: center;
`;

export const CategoryText = styled.Text`
  color: ${colors.white};
  font-size:15px;
  font-family: Avenir-Heavy;
  margin-bottom:2px;
`;

export const TitleText = styled.Text`
  color: ${colors.white};
  font-family:Avenir-Medium;
  font-size:32px;
  line-height:42px;
  width: 100%;
`;

export const TagText = styled.Text`
  font-family:Avenir-Medium;
  color: #FF5A5A;
  font-size:18px;
  fontWeight: bold;
`;

export const OtherInformationText = styled.Text`
  color: ${colors.white};
  opacity:0.8;
  font-size:11px;
  margin-right: 5px;
  font-family: Avenir-Regular;
`;

export const OptionText = styled.Text`
  color: ${colors.white};
  font-size:16px;
  margin-left:3px;
  margin-right:3px;
  font-family: Avenir-Medium;
`;

export const Sep = styled.View`
  background-color:${colors.white};
  opacity:0.8;
  width: 1px;
  height: 100%;
  margin-left: 5px;
  margin-right: 8px;
`;

export const GradientWrapper = styled.View`
  position:absolute;
  left:0;
  bottom:0;
  height: 100%;
  width: 100%;
`;