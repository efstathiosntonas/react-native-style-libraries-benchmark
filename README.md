# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo App reproducer to demonstrate the performance difference between using popular style libraries and react-native built-in styling.

Tests include React Native `StyleSheet`, Styled Components v6, Tamagui, NativeWind and Shopify Restyle

Feel free to fork or PR this repo with improvements or to include other styling libraries.

### ***Note: Test scores may vary between different machines with different hardware***

1000 items are rendered in `Array.map` to simulate the complexity of a real app.

Read this comment on how to test the performance: https://github.com/styled-components/styled-components/issues/3940#issuecomment-1630244738

## Results - Rendering Time for 1000 Empty Views (ms)

Mac Specs: 
Mac Studio M1 Ultra 1TB SSD 64GB RAM
Simulator: iPhone 14 Pro Max iOS 16.4

![graph.png](assets/graph.png)

|            | 1     | 2     | 3     | 4     | 5     | 6     | Avg   | % Slowdown |
|------------|-------|-------|-------|-------|-------|-------|-------|------------|
| Native     | 140.1 | 135.6 | 137.5 | 142.1 | 137.2 | 131.3 | 137.6 | 0          |
| Tamagui    | 501.4 | 507.8 | 506.9 | 506.4 | 510.7 | 502.5 | 506.5 | 267.88     |
| Styled v6  | 227.7 | 226.7 | 229   | 226   | 224   | 225.9 | 226.7 | 64.86      |
| Restyle    | 186.8 | 162.3 | 185.2 | 184.4 | 186.6 | 184.2 | 182.5 | 32.63      |
| NativeWind | 226.3 | 248.9 | 243.4 | 245.1 | 245.1 | 246.5 | 241.8 | 75.95      |


# Reproduction Steps
1. Start the profiler by pressing Shift + M and open React Dev Tools.
2. Open profiler and hit record
3. Press the toggle button and stop recording
4. Record the time to render App.ts
5. Average the result across at least 3 runs

