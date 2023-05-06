import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams , useNavigate } from "react-router-dom";
import { clearDetailVideogame, getVideogameById } from "../../redux/actions";
import {
  BackButton,
  ContentContainer,
  DescriptionDetail,
  DetailContainer,
  Genre,
  Genres,
  IdVideogame,
  Img,
  LeftContainer,
  Platform,
  Platforms,
  PrincipalContainer,
  Rating,
  Released,
  RightContainer,
  Title,
} from "../../styles/pages/Detail.style";

export default function Detail() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const videogame = useSelector((state) => state.detailVideoGame);
  
  useEffect(() => {
    // Get videogame detail
    dispatch(getVideogameById(id));
  }, [id]);

  useEffect(() => {
    return () => {
      // Clear detail videogame state.
      dispatch(clearDetailVideogame());
    };
  }, [dispatch]);

  return (
    <PrincipalContainer>
      {/* Detail videogame */}
      <BackButton onClick={() => { navigate(-1, { replace: true }) }}>Volver</BackButton>

      <DetailContainer>
        {videogame && (
          <ContentContainer>
            <LeftContainer>

              <IdVideogame>{id}</IdVideogame>
              <Title>{videogame.name}</Title>
              <Img src={videogame.image} alt={videogame.name} width="400px" />
              <Genres>
              {
                videogame.genres?.map((genre) => {
                  return <Genre>{genre}</Genre>
                }
                )
              }
              </Genres>
              <Rating>{videogame.rating}</Rating> 
            </LeftContainer>
            <RightContainer>
            <Released>{videogame.released}</Released>
            <DescriptionDetail>{videogame.description}</DescriptionDetail>
            <Platforms>
            {
                videogame.platforms?.map((platform) => {
                  return <Platform>{platform}</Platform>
                }
                )
            }
            </Platforms>

            </RightContainer>
          </ContentContainer>
        )}
      </DetailContainer>
    </PrincipalContainer>
  );
}
