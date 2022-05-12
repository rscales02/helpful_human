import { FC, useState } from "react";
import { Card } from "./Card";
import ReactPaginate from "react-paginate";

interface IListViewProps {
  handleClick: (e: React.SyntheticEvent<HTMLElement>) => void;
  data: string[];
}

export const ListView: FC<IListViewProps> = (props) => {
  const [page, setPage] = useState(0);
  // const [items, setItems] = useState(props.data);
  const itemsPerPage = 12;
  const itemsPerRow = 4;
  const numberOfRecordsVistited = page * itemsPerPage;
  const totalPages = Math.ceil(props.data.length / itemsPerPage);
  const changePage = ({ selected }: any) => {
    setPage(selected);
  };

  const displayItems = props.data
    .slice(numberOfRecordsVistited, numberOfRecordsVistited + itemsPerPage)
    .map((item) => {
      return <Card color={item} key={item} onClick={props.handleClick} />;
    });

  let displayRows = [];

  for (let i = 0; i < Math.floor(itemsPerPage / itemsPerRow); i++) {
    displayRows.push(
      <div key={i} className="d-flex flex-row mt-2 flex-grow-1 h-25">
        {displayItems.slice(i, i + itemsPerRow)}
      </div>
    );
  }

  return (
    <div className="flex-column w-75 justify-content-center px-2 mt-2">
      {displayRows}
      <ReactPaginate
        className=""
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"navigationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"navigationActive"}
      />
    </div>
  );
};
