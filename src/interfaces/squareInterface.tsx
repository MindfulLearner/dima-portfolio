import { ReactNode } from "react";
/**
 * interface that will define the props of the square components
 * shadow-lg min-w-[130px] min-h-[130px] h-[130px] bg-texteditor2CardsColor flex items-center justify-center">
 */
export interface SquareInterface {
    width?: string;
    height?: string;
    shadow?: string;
    color?: string;
    flex?: string;
    items?: string;
    justify?: string;
    children?: ReactNode; 
}