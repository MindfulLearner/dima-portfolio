import { SquareInterface } from "../../../interfaces/squareInterface";

export const SquareCards = ({ children, ...props }: SquareInterface) => {
  return (
    <div
      className={`${props.shadow} ${props.width} ${props.height} ${props.color} ${props.flex} ${props.items} ${props.justify}`}
    >
      {children}
    </div>
  );
};
