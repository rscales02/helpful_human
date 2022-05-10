import { FC } from "react";
import { Card } from "./Card";
import { Pagination } from "react-bootstrap";

interface IListViewProps {}

export const ListView: FC<IListViewProps> = (props) => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Card color="cffff2" />
      <Pagination className="justify-content-center">{items}</Pagination>
    </div>
  );
};
