import React, { FC } from "react";
import { Card } from "./Card";
import { Button } from "react-bootstrap";

interface IDetailViewProps {
  handleClear: (e: React.SyntheticEvent<HTMLElement>) => void;
  handleClick: (e: React.SyntheticEvent<HTMLElement>) => void;
  data: string[];
}

export const DetailView: FC<IDetailViewProps> = (props) => {
  const primary = props.data[0];
  const secondary = props.data
    .slice(1)
    .map((item) => (
      <Card color={item} onClick={props.handleClick} key={item} />
    ));
  return (
    <div className="d-block w-75 justify-content-center px-2 mt-4">
      <Card color={primary} big={true} onClick={props.handleClick} />
      <div className="d-flex flex-row justify-content-center flex-fill">
        {secondary}
      </div>
      <Button
        className="btn-light w-25 mt-4 border border-dark"
        onClick={props.handleClear}
      >
        Clear
      </Button>
    </div>
  );
};
