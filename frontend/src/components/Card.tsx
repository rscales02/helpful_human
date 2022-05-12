import { FC } from "react";
interface ICardProps {
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
  color?: string | undefined;
  big?: boolean;
}

export const Card: FC<ICardProps> = (props) => {
  const cardStyle = {
    height: props.big ? "60%" : "90%",
    width: props.big ? "97%" : "20%",
    minWidth: "100px",
    minHeight: "120px",
    cursor: "pointer",
  };
  return (
    <div
      id={props.color}
      className="d-flex flex-column rounded border m-1 border-dark flex-grow-1 mx-3"
      onClick={props.onClick}
      style={cardStyle}
    >
      <div
        className="p-2 flex-grow-1"
        style={{ backgroundColor: props.color }}
      />
      {props.big ? (
        <h2 className="align-text-middle text-start justify-self-center mt-4 p-3">
          {props.color}
        </h2>
      ) : (
        <p className="text-bottom text-start align-text-middle mt-2 p-2 m-0">
          {props.color}
        </p>
      )}
    </div>
  );
};
