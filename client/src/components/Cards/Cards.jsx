import { CardsContainer } from "../../styles/components/Cards.style";
import Card from "../Card/Card";
import spinner from "../../assets/img/svg/loader.svg";

export default function Cards({ videogames, currentPage }) {
  const pageSize = 16;
  const startIndex = (currentPage - 1) * pageSize;
  const visibleVideogames = videogames.slice(startIndex, startIndex + pageSize);

  return (
    <CardsContainer>
      {/* Map */}
      {visibleVideogames.length > 0 ? (
        visibleVideogames.map((videogame) => {
    
          return (
            <Card
              id={videogame.id}
              name={videogame.name}
              genres={videogame.genres}
              image={videogame.image}
              rating={videogame.rating}
            />
          );
        })
      ) : (
        <img src={spinner} alt="loading" height="250px" />
      )}
      {/* <Card/> */}
    </CardsContainer>
  );
}
