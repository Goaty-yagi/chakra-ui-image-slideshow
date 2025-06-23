import React from "react";
import { ComponentProps } from "react";
import { MotionImage } from "./MotionImage";
type MotionImageProps = ComponentProps<typeof MotionImage>;
interface CustomImageProps extends MotionImageProps {
    setMethod?: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustomImage({ setMethod, ...props }: CustomImageProps): import("react/jsx-runtime").JSX.Element;
export {};
