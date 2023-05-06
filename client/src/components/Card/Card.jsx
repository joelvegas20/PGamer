import {
  CardContainer,
  ContainerImage,
  ContainerInfo,
  Genre,
  GenreList,
  GenresContainer,
  ImageCard,
  Rating,
  StyleNavLink,
  Title,
} from "../../styles/components/Card.style";

export default function Card({ name, genres, image, id, rating }) {
  return (
    <CardContainer>
      {/* Image */}
      {/* for the moment  */}
      <ContainerImage>
        <ImageCard src={image} width="100%" />
      </ContainerImage>

      {/* Name */}
      <ContainerInfo>
        <StyleNavLink to={`/search/${id}`}>
          <Title>{name}</Title>
        </StyleNavLink>
        {genres.map((genre) => {
          return <span>{genre.name}</span>;
        })}
        {/* Rating */}
        <GenresContainer>
          <GenreList>
            {genres?.map((genre) => {
              return <Genre>{genre}</Genre>;
            })}
          </GenreList>
          <Rating>{rating}</Rating>
        </GenresContainer>
      </ContainerInfo>
    </CardContainer>
  );
}
