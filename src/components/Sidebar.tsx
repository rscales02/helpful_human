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
  const btns = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Brown",
    "Gray",
  ];
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
      {btns.map((item): any => {
        return (
          <a href={"#" + item} className="mt-4 text-dark">
            {item}
          </a>
        );
      })}
    </div>
  );
};
