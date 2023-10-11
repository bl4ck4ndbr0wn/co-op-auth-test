import { ThemeFonts } from './types/theme';

export const ICONS = {
    hide: require('../assets/icons/Hide.svg'),
    lock: require('../assets/icons/Paddlock.svg'),
    user: require('../assets/icons/User.svg'),
}

export const FONTS: ThemeFonts = {
    // based on font size
    text: 'Nunito Sans',
}

export const ASSETS = {
    // backgrounds/logo
    logo: require('../assets/images/logo.svg'),
    background: require('../assets/images/bg.png'),
}

export const THEME = {
    icons: ICONS,
    assets: { ...ICONS, ...ASSETS },
    fonts: FONTS,
};
