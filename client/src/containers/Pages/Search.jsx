import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Layout from "../../hocs/layouts/Layout";
import {
  filterVideogames,
  filterVideogamesByName,
  getAllGenres,
  getAllVideogames,
  orderVideogames,
} from "../../redux/actions";
import {
  ButtonCreate,
  InputSearch,
  PaginationContainer,
  SearchBarContainer,
  SearchContainer,
  SelectorStyle,
  Title,
  TitleContainer,
} from "../../styles/pages/Search.style";
import searchIcon from "../../assets/img/svg/search.svg";

export default function Search() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Global States.
  const filteredVideoGames = useSelector((state) => state.filteredVideoGames);
  const genres = useSelector((state) => state.genres);

  // Local State.
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPageNumerLimit, setMaxPageNumerLimit] = useState(8);
  const [minPageNumerLimit, setMinPageNumerLimit] = useState(0);

  const itemsPerPage = 15;
  const pageNumerLimit = 8;

  useEffect(() => {

    // Get all genres and videogames.
    dispatch(getAllGenres());
    dispatch(getAllVideogames(currentPage));
    
  }, [currentPage]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  // for (
  //   let i = 1;
  //   i <= Math.ceil(filteredVideoGames.length / itemsPerPage);
  //   i++
  // ) {
    for (let i = 1; i <= Math.ceil(filteredVideoGames.length / itemsPerPage); i = i + 1) {
    pages.push(i);
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  filteredVideoGames.slice(indexOfFirstItem, indexOfLastItem);

  // Render Page Numbers
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumerLimit + 1 && number > minPageNumerLimit) {
      return (
        <button key={number} id={number} onClick={handleClick}>
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  // Next and Previous Buttons
  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumerLimit) {
      setMaxPageNumerLimit(maxPageNumerLimit + pageNumerLimit);
      setMinPageNumerLimit(minPageNumerLimit + pageNumerLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumerLimit == 0) {
      setMaxPageNumerLimit(maxPageNumerLimit - pageNumerLimit);
      setMinPageNumerLimit(minPageNumerLimit - pageNumerLimit);
    }
  };

  // Next and Previous (...) Buttons
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumerLimit) {
    pageIncrementBtn = <button onClick={handleNextBtn}>&hellip;</button>;
  }
  let pageDecrementBtn = null;
  if (minPageNumerLimit >= 1) {
    pageDecrementBtn = <button onClick={handlePrevBtn}>&hellip;</button>;
  }

  return (
    <Layout>
      {/* Title */}
      <TitleContainer>
        <Title>Search</Title>

        {/* Search bar,  filters , orders , */}
        <SearchBarContainer>
          <InputSearch
            type="text"
            placeholder="Insert name..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <ButtonCreate
            onClick={() => {
              dispatch(filterVideogamesByName(searchTerm));
            }}
          >
            <img src={searchIcon} />
          </ButtonCreate>

          <SelectorStyle
            name="filter"
            id="filter"
            onChange={(event) => {
              dispatch(filterVideogames(event.target.value));
            }}
          >
            <option value="all">All</option>
            <option value="api">Api</option>
            <option value="created">Created</option>
            {genres
              ? genres.map((genre) => {
                  return (
                    <option key={genre.id} value={genre.name}>
                      {genre.name}
                    </option>
                  );
                })
              : null}
          </SelectorStyle>
          <SelectorStyle
            name="order"
            id="order"
            onChange={(event) => {
              dispatch(orderVideogames(event.target.value));
            }}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="rating">Rating</option>
          </SelectorStyle>

          <ButtonCreate
            onClick={() => {
              navigate("/create");
            }}
          >
            Create Game
          </ButtonCreate>
        </SearchBarContainer>
        {/* </div> */}
      </TitleContainer>

      {/* Container  */}
      <SearchContainer>
        <Cards videogames={filteredVideoGames} currentPage={currentPage} />
      </SearchContainer>

      {/* Pagination */}
      <PaginationContainer>
        <button
          onClick={handlePrevBtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          Previous
        </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          onClick={handleNextBtn}
          disabled={currentPage == pages[pages.length - 1] ? true : false}
        >
          Next
        </button>
      </PaginationContainer>
    </Layout>
  );
}
