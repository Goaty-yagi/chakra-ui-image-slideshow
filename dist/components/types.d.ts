export interface ImageItem {
    url: string;
    text?: string;
}
export interface SlideshowProps {
    images: ImageItem[];
    slideDuration?: number;
    arrowConfig?: ArrowConfig;
    selectorConfig?: SelectorConfig;
    textConfig?: TextConfig;
    imageConfig?: ImageConfig;
}
export interface ArrowConfig {
    disable: boolean;
    style?: any;
}
export interface SelectorConfig {
    disable: boolean;
}
export interface TextConfig {
    disable: boolean;
}
export interface ImageConfig {
    grab: boolean;
}
