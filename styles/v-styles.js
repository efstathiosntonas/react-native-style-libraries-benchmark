import { Dimensions, Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';

// Caching maps for tx and vx functions
export const xCache = new Map();

export const shorthand = {
    f: 'flex',
    fd: 'flexDirection',
    jc: 'justifyContent',
    ai: 'alignItems',
    ac: 'alignContent',
    as: 'alignSelf',
    fg: 'flexGrow',
    fs: 'flexShrink',
    fw: 'flexWrap',
    fb: 'flexBasis',
    bbw: 'borderBottomWidth',
    blw: 'borderLeftWidth',
    bsw: 'borderStartWidth',
    bew: 'borderEndWidth',
    brw: 'borderRightWidth',
    btw: 'borderTopWidth',
    bw: 'borderWidth',
    b: 'bottom',
    l: 'left',
    r: 'right',
    t: 'top',
    z: 'zIndex',
    d: 'display',
    end: 'end',
    rg: 'rowGap',
    g: 'gap',
    cg: 'columnGap',
    h: 'height',
    w: 'width',
    m: 'margin',
    mt: 'marginTop',
    mr: 'marginRight',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    p: 'padding',
    pt: 'paddingTop',
    pr: 'paddingRight',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    maxh: 'maxHeight',
    maxw: 'maxWidth',
    minh: 'minHeight',
    minw: 'minWidth',
    ov: 'overflow',
    po: 'position',
    dr: 'direction',
    sc: 'shadowColor',
    sof: 'shadowOffset',
    sop: 'shadowOpacity',
    sr: 'shadowRadius',
    tm: 'transform',
    tmo: 'transformOrigin',
    bg: 'backgroundColor',
    bkc: 'borderBlockColor',
    bbec: 'borderBlockEndColor',
    bbsc: 'borderBlockStartColor',
    bbc: 'borderBottomColor',
    bber: 'borderBottomEndRadius',
    bblr: 'borderBottomLeftRadius',
    bbrr: 'borderBottomRightRadius',
    bbsr: 'borderBottomStartRadius',
    bc: 'borderColor',
    bv: 'borderCurve',
    bec: 'borderEndColor',
    beer: 'borderEndEndRadius',
    besr: 'borderEndStartRadius',
    blc: 'borderLeftColor',
    br: 'borderRadius',
    brc: 'borderRightColor',
    bsc: 'borderStartColor',
    bser: 'borderStartEndRadius',
    bssr: 'borderStartStartRadius',
    bs: 'borderStyle',
    btc: 'borderTopColor',
    bter: 'borderTopEndRadius',
    btlr: 'borderTopLeftRadius',
    btrr: 'borderTopRightRadius',
    btsr: 'borderTopStartRadius',
    o: 'opacity',
    e: 'elevation',
    pe: 'pointerEvents',
    c: 'color',
    ftf: 'fontFamily',
    fts: 'fontSize',
    fty: 'fontStyle',
    ftv: 'fontVariant',
    ftw: 'fontWeight',
    ls: 'letterSpacing',
    lh: 'lineHeight',
    ta: 'textAlign',
    td: 'textDecorationLine',
    tav: 'textAlignVertical',
    tdc: 'textDecorationColor',
    tsc: 'textShadowColor',
    tso: 'textShadowOffset',
    tsr: 'textShadowRadius',
    tt: 'textTransform',
    us: 'userSelect',
    wd: 'writingDirection',
    va: 'verticalAlign',
    ifd: 'includeFontPadding',
};

export const spacing = {
    xs: 8,
    sm: 12,
    md: 14,
    base: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
    '6xl': 192,
    '7xl': 256,
    '8xl': 384,
    '9xl': 512,
};

export const RFValue = (fontSize, standardScreenWidth = 360) => {
    const { width } = Dimensions.get('window');
    return Math.round((fontSize * width) / standardScreenWidth);
};

export const RFPercentage = (percent) => RFValue(percent, 100);

const parseValue = (key, value) =>
    'fontSize' === key
        ? RFValue(value)
        : value;

const parseStyle = (style) => {
    if (!style) return {};

    const cacheKey = JSON.stringify(style);
    if (xCache.has(cacheKey)) return xCache.get(cacheKey);

    const parsedStyle = Array.isArray(style)
        ? style.reduce((acc, item) => ({ ...acc, ...parseStyle(item) }), {})
        : Object.entries(style).reduce((acc, [key, value]) => {
            const mappedKey = shorthand[key];
            if (mappedKey) {
                // @ts-ignore - TS is not smart enough to infer the type of the value
                acc[mappedKey] = parseValue(
                    mappedKey,
                    isNaN(Number(value)) ?
                        spacing[value] ??
                        value
                        : Number(value),
                );
            } else {
                console.warn('No mapped key found for', key);
            }

            return acc;
        }, {});

    xCache.set(cacheKey, parsedStyle);
    return parsedStyle;
};

export const vx = (style) => parseStyle(style);

export function sx(strings, ...values) {
    const style = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');

    if (xCache.has(style)) return xCache.get(style);
    const platformStyles = {
        default: {},
        ...Platform.select({
            web: {},
            ios: {},
            android: {},
            windows: {},
            macos: {},
            native: {},
        }),
    };

    style.split(' ').forEach((item) => {
        const [platformKey, styleKeyValue] = item.includes(':')
            ? item.split(':')
            : ['default', item];
        const [key, value] = styleKeyValue.split('-');

        if (key && value) {
            const mappedKey = shorthand[key];
            if (mappedKey) {
                const targetPlatform = platformStyles[platformKey] || platformStyles.default;
                targetPlatform[mappedKey] = parseValue(
                    mappedKey,
                    isNaN(Number(value)) ? spacing[value] || value : Number(value),
                );
            } else {
                console.warn('No mapped key found for', key);
            }
        }
    });

    const result = platformStyles[Platform.OS] || platformStyles.default;
    xCache.set(style, result);
    return result;
}