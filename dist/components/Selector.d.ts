import { ImageItem } from "./types";
interface SelectorProps {
    images: ImageItem[];
    imageIndex: number;
    paginate: (offset: number) => void;
    resetTimer: () => void;
}
export default function Selector({ images, imageIndex, paginate, resetTimer, }: SelectorProps): import("react/jsx-runtime").JSX.Element;
export {};
