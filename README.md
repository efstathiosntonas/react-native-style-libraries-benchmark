# React Native Style Libraries Benchmark

Original reproducer was created by @tj-mc: https://github.com/tj-mc/styled-components-native-perf-reproducer

This is an Expo SDK 52 App reproducer to demonstrate the performance difference between popular style libraries and react-native built-in styling.

Tests include React Native [StyleSheet](https://reactnative.dev/docs/stylesheet), [Styled Components](https://github.com/styled-components/styled-components), [Tamagui](https://github.com/tamagui/tamagui), [NativeWind](https://github.com/marklawlor/nativewind), [Emotion](https://github.com/emotion-js/emotion), [Zephyr](https://github.com/FormidableLabs/react-native-zephyr), [Dripsy](https://github.com/nandorojo/dripsy), [fast-styles](https://github.com/fedemartinm/fast-styles), [Tailwind React Native Classnames(twrnc)](https://github.com/jaredh159/tailwind-react-native-classnames), Shopify's [restyle](https://github.com/Shopify/restyle), [react-native-unistyles](https://github.com/jpudysz/react-native-unistyles) and [react-native-styled-system](https://github.com/mj-studio-library/react-native-styled-system)

Feel free to fork or PR this repo with improvements or to include other styling libraries.

### ***Note: Test scores may vary between different machines with different hardware***

> `Restyle` scores are remarkably impressive, `tamagui`, `react-native-unistyles` and `nativewind` shows great performance compared to `Native StyleSheet`.

250 items are rendered in `Array.map` and it's a **basic** test in DEV mode. When more features of each library are added (eg. media queries etc) as your project grows the measurements may vary by a lot.

Read this comment on how to test the performance: https://github.com/styled-components/styled-components/issues/3940#issuecomment-1630244738

![demo.png](assets/demo.png)

Demo video with `npx expo start -c --no-dev --minify`:

https://github.com/user-attachments/assets/32a09a21-bd69-49fe-9a0f-9bf8d82405a1

Here's another video demonstrating the performance difference and on press toggle.

https://github.com/user-attachments/assets/8007fa50-0bcc-454b-8fc4-66fe8ce032f6


## Results - Rendering Time for 250 Views (ms) in `npx expo start --no-dev --minify` (after every run metro is shut down, always start fresh):

Mac Specs:
MacBook Pro 13-inch, Intel Core i7, 256GB SSD 16GB RAM\
Simulator: iPhone 11, iOS 18.1

|UI           | 1   | 2   | 3   | 4   | 5   | 6   | Avg    | % Slowdown |
|-------------|-----|-----|-----|-----|-----|-----|--------|------------|
| Native      | 696 | 738 | 711 | 712 | 726 | 684 | 711.27 | 0.00%      |
| Restyle     | 612 | 622 | 654 | 621 | 621 | 623 | 625.50 | -12.05%    |
| Emotion     | 661 | 657 | 659 | 660 | 661 | 685 | 663.83 | -6.66%     |
| Tamagui     | 667 | 666 | 753 | 647 | 648 | 701 | 680.33 | -4.34%     |
| Styled v6   | 772 | 709 | 616 | 614 | 647 | 725 | 680.50 | -4.31%     |
| Unistyles   | 668 | 698 | 693 | 691 | 712 | 722 | 697.33 | -1.96%     |
| NativeWind  | 734 | 672 | 699 | 677 | 706 | 743 | 705.17 | -0.84%     |
| fast-styles | 725 | 705 | 706 | 730 | 715 | 683 | 710.67 | -0.07%     |
| twrnc       | 659 | 763 | 745 | 776 | 693 | 735 | 728.50 | 2.44%      |
| Zephyr      | 743 | 747 | 739 | 713 | 749 | 701 | 732.00 | 2.93%      |
| Dripsy      | 774 | 804 | 740 | 875 | 781 | 819 | 798.83 | 12.33%     |
| styled-system | NaN | NaN | NaN | NaN | NaN | NaN | NaN  | NaN        |

# Reproduction Steps

1. Start the profiler by pressing Shift + M and open React Dev Tools.
2. Open profiler and hit record
3. Press the toggle button and stop recording
4. Record the time to render App.ts
5. Average the result across at least 3 runs

