import { View } from 'react-native';
import { COUNT } from '../utils';
import { StyledSystemProvider, useSx } from '@react-native-styled-system/core';

const AppTheme = {
  colors: {
    red: '#F00',
  },
  space: {1: 5},
  sizes: {},
  radii: {},
  typography: {},
};

export const ReactNativeStyledSystem = () => {
  return (
    <StyledSystemProvider theme={AppTheme}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {new Array(COUNT).fill(0).map((_, i) => (
          <StyledView
            key={i}
            borderWidth={2}
            p={1}
            borderColor={'red'}
          />
        ))}
      </View>
    </StyledSystemProvider>
  );
};

const StyledView = (props) => {
  const { getStyle, filteredProps } = useSx(props);
  return <View style={getStyle()} {...filteredProps} />;
};