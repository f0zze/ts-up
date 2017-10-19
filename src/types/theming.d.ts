declare module 'theming' {
    import { StyledComponent } from 'react-emotion';
    import { StatelessComponent } from 'react';

    interface WithTheme {
        <Tag extends keyof JSX.IntrinsicElements, Props = {}>(
            styled: StyledComponent<Props, {}, JSX.IntrinsicElements[Tag]>
        ): StyledComponent<Props, {}, JSX.IntrinsicElements[Tag]>;
    }

    export const withTheme: WithTheme;
    export const ThemeProvider: StatelessComponent<{theme: any}>
}
