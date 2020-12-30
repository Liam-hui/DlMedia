import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  width: 100%;
  paddingHorizontal:35px;
  paddingVertical:20px;
`;

export const ParagraphText = styled.Text`
  font-family:NotoSerifTC-Regular;
  color:black;
`;

export const BoldText = styled.Text`
  font-family:NotoSerifTC-Bold;
`;

export const TagText = styled.Text`
  color:black;
  font-weight:bold;
  text-decoration-line: underline;
`;
