import { ReactNode } from "react";
/**
 * interface that will define the props of the square components
 * 
 */
export interface SquareInterface {
    width?: string;
    height?: string;
    shadow?: string;
    backgroundColor?: string;
    flex?: string;
    items?: string;
    justify?: string;
    children?: ReactNode; 
    /**
     * hoover mouse enter and leave for activating hoovering
     */
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
