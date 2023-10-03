# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 49 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

Tests include React Native [StyleSheet](https://reactnative.dev/docs/stylesheet), [Styled Components](https://github.com/styled-components/styled-components), [Tamagui](https://github.com/tamagui/tamagui), [NativeWind](https://github.com/marklawlor/nativewind), [Emotion](https://github.com/emotion-js/emotion), [Zephyr](https://github.com/FormidableLabs/react-native-zephyr), [Dripsy](https://github.com/nandorojo/dripsy), Gluestack [[1]](https://github.com/gluestack/gluestack-ui) [[2]](https://github.com/gluestack/gluestack-style), [fast-styles](https://github.com/fedemartinm/fast-styles), [Tailwind React Native Classnames(twrnc)](https://github.com/jaredh159/tailwind-react-native-classnames), Shopify's [restyle](https://github.com/Shopify/restyle) and [react-native-unistyles](https://github.com/jpudysz/react-native-unistyles) 

Feel free to fork or PR this repo with improvements or to include other styling libraries.

### ***Note: Test scores may vary between different machines with different hardware***

~~Note: `Tamagui` scores are surprisingly low, I've created a [discussion about it](https://github.com/tamagui/tamagui/discussions/1471)~~
 
#### Note: Tamagui compiler is turned off in DEV mode, production/release performance is greatly improved, it reaches `StyleSheet` levels.

1000 items are rendered in `Array.map` and it's a **basic** test in DEV mode. When more features of each library are added (eg. media queries etc) as your project grows the measurements may vary by a lot.

Read this comment on how to test the performance: https://github.com/styled-components/styled-components/issues/3940#issuecomment-1630244738

![demo.png](assets/demo.png)

Demo video with `TAMAGUI_TARGET=native expo start --no-dev --minify`:


https://github.com/efstathiosntonas/react-native-style-libraries-benchmark/assets/717975/9942825e-2e97-47ac-9311-0df98718b3b1


## Results - Rendering Time for 1000 Empty Views (ms) in DEV mode

Mac Specs: 
Mac Studio M1 Ultra 1TB SSD 64GB RAM\
Simulator: iPhone 13, iOS 16.4

|             | 1   | 2   | 3   | 4   | 5   | 6   | Avg    | % Slowdown |
|-------------|-----|-----|-----|-----|-----|-----|--------|------------|
| Native      | 142 | 138 | 141 | 143 | 143 | 144 | 141.83 | 0          |
| Unistyles   | 149 | 144 | 149 | 147 | 149 | 149 | 147.5  | 4%         |
| twrnc       | 172 | 173 | 163 | 160 | 161 | 161 | 164.16 | 15.74%     |
| fast-styles | 170 | 167 | 172 | 175 | 172 | 172 | 171.33 | 20.81%     |
| Restyle     | 188 | 188 | 187 | 189 | 189 | 187 | 188.33 | 32.77%     |
| Zephyr      | 184 | 195 | 190 | 190 | 192 | 184 | 189.16 | 33.197%    |
| Styled v6   | 222 | 215 | 230 | 204 | 224 | 230 | 221.83 | 56.47%     |
| Emotion     | 276 | 267 | 270 | 268 | 276 | 271 | 271.33 | 91.42%     |
| NativeWind  | 289 | 298 | 301 | 286 | 300 | 295 | 294.83 | 107.99%    |
| Gluestack   | 291 | 295 | 302 | 298 | 306 | 311 | 301.5  | 112.84%    |
| Tamagui     | 306 | 304 | 308 | 302 | 304 | 306 | 305.0  | 115.21%    |
| Dripsy      | 692 | 665 | 690 | 672 | 675 | 681 | 678.33 | 378.99%    |

### scores with `TAMAGUI_TARGET=native expo start --no-dev --minify`:
(after every run metro is shut down, always start fresh)

|             | 1   | 2   | 3   | 4   | 5   | 6   | Avg    | % Slowdown |
|-------------|-----|-----|-----|-----|-----|-----|--------|------------|
| Native      | 54  | 55  | 53  | 60  | 59  | 56  | 55.5   | 0          |
| Unistyles   | 57  | 57  | 56  | 58  | 59  | 58  | 57.83  | 4.21%      |
| fast-styles | 65  | 66  | 66  | 68  | 67  | 64  | 66     | 18.92%     |
| twrnc       | 66  | 74  | 68  | 66  | 65  | 67  | 67     | 20.72%     |
| Zephyr      | 76  | 79  | 77  | 78  | 78  | 79  | 77.83  | 40.36%     |
| Restyle     | 76  | 77  | 78  | 78  | 85  | 78  | 78.33  | 41.08%     |
| Styled v6   | 100 | 100 | 100 | 100 | 101 | 102 | 100.5  | 81.08%     |
| Emotion     | 134 | 136 | 135 | 141 | 134 | 136 | 135.33 | 144.86%    |
| NativeWind  | 144 | 136 | 134 | 139 | 133 | 138 | 137.33 | 147.68%    |
| Tamagui     | 156 | 151 | 158 | 159 | 156 | 159 | 156.5  | 182.88%    |
| Gluestack   | 177 | 179 | 175 | 178 | 177 | 178 | 177.66 | 220.97%    |
| Dripsy      | 538 | 566 | 556 | 564 | 556 | 563 | 556.16 | 904.65%    |

# Reproduction Steps
1. Start the profiler by pressing Shift + M and open React Dev Tools.
2. Open profiler and hit record
3. Press the toggle button and stop recording
4. Record the time to render App.ts
5. Average the result across at least 3 runs

