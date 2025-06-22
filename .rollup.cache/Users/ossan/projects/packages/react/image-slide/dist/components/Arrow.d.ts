import React from "react";
interface ArrowProps {
    paginate: (_offset: number) => void;
    resetTimer: () => void;
    direction: "left" | "right";
    style?: ArrowStyle;
}
interface ArrowStyle {
    size: "s" | "m";
}
declare const Arrow: React.NamedExoticComponent<ArrowProps>;
export default Arrow;
