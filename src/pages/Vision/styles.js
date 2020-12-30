import styled from 'styled-components/native';
import { colors, metrics } from '@/styles';

export const StyledContainer = styled.View`
  align-items: flex-start;
  background-color: #28262F;;
  color: ${colors.primary};
  justify-content: flex-start;
  flex:1;
`;

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})`
  background-color: red;
  height: ${metrics.screenHeight}px;
  width: ${metrics.screenWidth}px;
`;

export const StyledTitle = styled.Text`
  color: ${colors.lighter};
  font-size: 24px;
`;
