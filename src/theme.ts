interface ThemeAttributes {
    primaryColor: string;
}

export interface Theme {
    theme?: ThemeAttributes;
}

const theme: ThemeAttributes = {
    primaryColor: 'red'
};

export default theme;
