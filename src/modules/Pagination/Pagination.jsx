import { PageItem, PageLink, PaginationContainer, Wrapper } from "./styles";

const Pagination = ({ filmsPerPage, totalFilms, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrapper>
      <PaginationContainer>
        {pageNumbers.map((number) => (
          <PageItem key={number}>
            <PageLink onClick={() => paginate(number)}>{number}</PageLink>
          </PageItem>
        ))}
      </PaginationContainer>
    </Wrapper>
  );
};

export default Pagination;
