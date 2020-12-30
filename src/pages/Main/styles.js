import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import { colors, metrics } from '@/styles';

export const Tab = styled.View`
  width:${Math.round(metrics.screenWidth)};
  height:${Math.round(metrics.screenHeight)};
`;

export const TopRow = styled.View`
  position:absolute;
  top:50px;
  padding-left:5px;
  padding-right:15px;
  flex-direction:row;
  align-items: center;
  width:100%;
  justify-content:space-between;

  `;




