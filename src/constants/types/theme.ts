import { ImageSourcePropType } from 'react-native';

export interface ThemeIcons {
    hide: ImageSourcePropType,
    lock: ImageSourcePropType,
    user: ImageSourcePropType
}

export interface ThemeAssets {
    logo: ImageSourcePropType;
    header: ImageSourcePropType;
    background: ImageSourcePropType;
}

export interface ThemeFonts {
    text: string;
}

export interface ICommonTheme {
    assets: ThemeAssets & ThemeIcons;
    icons: ThemeIcons;
    fonts: ThemeFonts;
}
