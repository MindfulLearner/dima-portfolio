import React from "react";
import { SvgInterface } from "../../../interfaces/svgInterface";

const ItemGmailSvg: React.FC<SvgInterface> = ({ fill, width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32"><path d="M30.996 7.824v17.382a2.044 2.044 0 0 1-2.044 2.044H24.179V15.663L16 21.799l-8.179-6.136v11.588H3.049a2.044 2.044 0 0 1-2.044-2.044V7.824A3.067 3.067 0 0 1 5.92 5.376l-.008-.006L16 12.937 26.088 5.37a3.067 3.067 0 0 1 4.907 2.454z" fill={fill} /></svg>
  );
};

export default ItemGmailSvg;
