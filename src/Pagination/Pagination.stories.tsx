import React, { useState } from "react";
import { Meta } from "@ladle/react";
import Pagination from "./Pagination";

export default {
  title: "Pagination",
} satisfies Meta;

const totalPictures = 500;
const pageSize = 10;
const pictures = Array.from({ length: totalPictures }, (_, i) => ({
  id: i + 1,
  url: `https://picsum.photos/seed/${i + 1}/200/300`,
}));

const Template = ({ initialPage }: { initialPage: number }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const paginatedPictures = pictures.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {paginatedPictures.map((pic) => (
          <img
            key={pic.id}
            src={pic.url}
            alt={`Picture ${pic.id}`}
            width={100}
            height={150}
          />
        ))}
      </div>
      <Pagination
        totalCount={totalPictures}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        className="custom-pagination"
      />
    </div>
  );
};

export const FirstPage = () => <Template initialPage={1} />;
export const MiddlePage = () => <Template initialPage={3} />;
export const LastPage = () => (
  <Template initialPage={Math.ceil(totalPictures / pageSize)} />
);

export const NoPagination = () => (
  <Pagination
    totalCount={5}
    pageSize={10}
    currentPage={1}
    onPageChange={() => {}}
    className="custom-pagination"
  />
);

export const ClickInteractions = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
        Previous
      </button>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      <Pagination
        totalCount={totalPictures}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        className="custom-pagination"
      />
    </div>
  );
};
