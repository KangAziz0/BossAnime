const Pagination = ({ page, last, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <>
      <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary font-bold">
        {page > 1 ? (
          <button className=" hover:text-color-accent" onClick={handlePrevPage}>
            Preview
          </button>
        ) : (
          ""
        )}
        <p>
          {page} of {last}
        </p>
        {page != last ? (
          <button className=" hover:text-color-accent" onClick={handleNextPage}>
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default Pagination;
