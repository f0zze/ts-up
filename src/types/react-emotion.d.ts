declare module 'react-emotion' {
    import { StatelessComponent, Component as ClassComponent, CSSProperties } from 'react';
    import { Interpolation as EmotionInterpolation } from 'emotion';

    export * from 'emotion';

    export type InterpolationFn<Props = {}> = (props: Props) => EmotionInterpolation | InterpolationFn<Props>;

    export type InterpolationTypes<Props = {}> = InterpolationFn<Props> | EmotionInterpolation;

    export type Interpolation<Props = {}> = InterpolationTypes<Props> | InterpolationTypes<Props>[];

    export interface Options {
        string?: string;
    }

    type Component<Props> = ClassComponent<Props> | StatelessComponent<Props>;

    export type ThemedProps<Props, Theme> = Props & Theme;

    export interface StyledComponent<Props, Theme, IntrinsicProps>
        extends ClassComponent<Props & IntrinsicProps>,
            StatelessComponent<Props & IntrinsicProps> {
        displayName: string;

        __emotion_styles: string[];
        __emotion_base: string | Component<Props & IntrinsicProps>;
        __emotion_real: ThemedReactEmotionInterface<Theme>;

        withComponent<Tag extends keyof JSX.IntrinsicElements>(
            tag: Tag
        ): StyledComponent<Props, Theme, JSX.IntrinsicElements[Tag]>;

        withComponent(component: Component<Props>): StyledComponent<Props, Theme, {}>;
    }

    export type ObjectStyleAttributes = CSSProperties | { [key: string]: ObjectStyleAttributes };

    export interface CreateStyled<Props, Theme, IntrinsicProps> {
        // overload for template string as styles
        (strings: TemplateStringsArray, ...vars: Interpolation<ThemedProps<Props, Theme>>[]): StyledComponent<
            Props,
            Theme,
            IntrinsicProps
        >;

        // overload for object as styles
        (
            ...styles: (ObjectStyleAttributes | ((props: ThemedProps<Props & {}, Theme>) => ObjectStyleAttributes))[]
        ): StyledComponent<Props, Theme, IntrinsicProps>;
    }

    // TODO: find a way to reuse CreateStyled here
    // for now I needed to repeat all fn types/overloads
    type ShorthandsFactories<Theme> = {
        [Tag in keyof JSX.IntrinsicElements]: {
            // overload for template string as styles
            <Props = {}>(
                strings: TemplateStringsArray,
                ...vars: Interpolation<ThemedProps<Props & JSX.IntrinsicElements[Tag], Theme>>[]
            ): StyledComponent<Props, Theme, JSX.IntrinsicElements[Tag]>;

            // overload for object as styles
            <Props = {}>(
                ...styles: (
                    | ObjectStyleAttributes
                    | ((props: ThemedProps<Props & JSX.IntrinsicElements[Tag], Theme>) => ObjectStyleAttributes))[]
            ): StyledComponent<Props, Theme, JSX.IntrinsicElements[Tag]>;
        }
    };

    export interface ThemedReactEmotionInterface<Theme> extends ShorthandsFactories<Theme> {
        // overload for dom tag
        <Props, Tag extends keyof JSX.IntrinsicElements>(tag: Tag | Component<Props>, options?: Options): CreateStyled<
            Props,
            Theme,
            JSX.IntrinsicElements[Tag]
        >;

        // overload for component
        <Props>(component: Component<Props>, options?: Options): CreateStyled<Props, Theme, {}>;
    }

    export interface ThemedReactEmotionModule<Theme> {
        default: ThemedReactEmotionInterface<Theme>;
    }

    const styled: ThemedReactEmotionInterface<{}>;
    export default styled;
}
