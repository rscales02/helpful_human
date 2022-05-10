import React, { FC } from "react";
import { Card } from "./Card";
import { Button } from "react-bootstrap";

interface IDetailViewProps {
  handleClick: (e: React.SyntheticEvent<HTMLElement>) => void;
}

export const DetailView: FC<IDetailViewProps> = (props) => {
  return (
    <div>
      <Card color="cffff1"></Card>
      <div className="d-flex flex-row justify-content-center flex-fill">
        <Card color="cffff1"></Card>
        <Card color="cffff1"></Card>
        <Card color="cffff1"></Card>
        <Card color="cffff1"></Card>
        <Card color="cffff1"></Card>
      </div>
      <Button onClick={props.handleClick}>Clear</Button>
    </div>
  );
};
