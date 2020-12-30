import React from 'react';
import { View} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, {
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Path,
} from 'react-native-svg';
import Animated,{
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useAnimatedProps,
  interpolate,
  useDerivedValue,
  Extrapolate
} from "react-native-reanimated";
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient)

export default function DlLogo(props) {
  
  const logoColor = useAnimatedStyle(() => {
    return {
      backgroundColor: props.logoColor.value
    };
  });

  return (
    <MaskedView
      style={{width:85,height:45}}
      maskElement={
        <Svg width={85} height={45} viewBox="0 0 85 45" {...props}>
          <Defs>
            <LinearGradient
              id="prefix__a"
              x1={1.025}
              y1={1}
              x2={0.305}
              y2={1}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor={'black'}  />
              <Stop offset={0.389} stopColor={'black'} />
              <Stop offset={1} stopColor={'black'} stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
              id="prefix__b"
              x1={0.023}
              y1={0.972}
              x2={0.5}
              y2={0.5}
              gradientUnits="objectBoundingBox"
            >
              <Stop offset={0} stopColor={'black'} />
              <Stop offset={0.556} stopColor={'black'} />
              <Stop offset={1} stopColor={'black'} stopOpacity={0} />
            </LinearGradient>
          </Defs>
          <G data-name="Group 204" transform="translate(5031 -56)">
            <Rect
              data-name="Rectangle 219"
              width={52}
              height={31}
              rx={14}
              transform="translate(-5040 63)"
              fill="url(#prefix__a)"
            />
            <Path
              data-name="Rectangle 218"
              transform="translate(-4982 56)"
              fill="url(#prefix__b)"
              d="M0 0h38v38H0z"
            />
          </G>
        </Svg>
      }
    >
      <Animated.View style={[{flex:1},logoColor]} />
    </MaskedView>

  );
}
