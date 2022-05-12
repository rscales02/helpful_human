import { FC } from "react";

import { Button } from "react-bootstrap";

interface ISidebarProps {
  onClick: (e: React.SyntheticEvent<HTMLElement>) => void;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const divStyle: any = {
    backgroundColor: "gray",
    textAlign: "left",
    position: "sticky",
  };
  return (
    <div className="d-flex flex-column px-4 w-25" style={divStyle}>
      <Button
        className="mt-3"
        variant="light"
        style={{ fontWeight: "bold" }}
        onClick={props.onClick}
      >
        Random Color
      </Button>
      <a href="#Red" className="mt-1 text-dark">
        Red
      </a>
      <a href="#Orange" className="mt-1 text-dark">
        Orange
      </a>
      <a href="#Yellow" className="mt-1 text-dark">
        Yellow
      </a>
      <a href="#Green" className="mt-1 text-dark">
        Green
      </a>
      <a href="#Blue" className="mt-1 text-dark">
        Blue
      </a>
      <a href="#Purple" className="mt-1 text-dark">
        Purple
      </a>
      <a href="#Brown" className="mt-1 text-dark">
        Brown
      </a>
      <a href="#Gray" className="mt-1 text-dark">
        Gray
      </a>
    </div>
  );
};
