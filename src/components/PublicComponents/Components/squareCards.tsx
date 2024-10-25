import { SquareInterface } from "../../../interfaces/squareInterface";

export const SquareCards = ({ children, ...props }: SquareInterface) => {
  return (
    <div
      className={`${props.shadow} ${props.width} ${props.height} ${props.backgroundColor} ${props.flex} ${props.items} ${props.justify}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {children}
    </div>
  );
};
