import { FC } from "react";

import { Button } from "react-bootstrap";

interface ISidebarProps {}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const divStyle: any = {
    position: "fixed",
    height: "100%",
    width: "20%",
    backgroundColor: "gray",
    textAlign: "left",
  };
  return (
    <div className="d-flex flex-column px-4" style={divStyle}>
      <Button className="mt-3" variant="light" style={{ fontWeight: "bold" }}>
        Random Color
      </Button>
      <a href="#Red">Red</a>
      <a href="#Orange">Orange</a>
      <a href="#Yellow">Yellow</a>
      <a href="#Green">Green</a>
      <a href="#Blue">Blue</a>
      <a href="#Purple">Purple</a>
      <a href="#Brown">Brown</a>
      <a href="#Gray">Gray</a>
    </div>
  );
};
