import { FC } from "react";
interface ICardProps {
  color?: string;
}

export const Card: FC<ICardProps> = (props) => {
  const cardStyle = {
    backgroundColor: "#" + props.color,
  };
  return (
    <div className="d-block rounded border m-1 border-dark">
      <div className="p-2" style={cardStyle} />
      <div className="p-2 justify-text-left">{"#" + props.color}</div>
    </div>
  );
};
