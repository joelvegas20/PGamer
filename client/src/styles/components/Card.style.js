import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f4fcd3;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  width: 250px;
  height: 250px;
  margin: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.3);
  }
  
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  overflow: hidden;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 50%;
  margin: 10px 0px;
`;

export const Title = styled.h3`
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: 50%;
`;

export const GenresContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyleNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ff4f33;
`;
export const GenreList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 10vh;
  list-style: none;
  padding: 0;
`;

export const Genre = styled.li`
  font-size: 0.5rem;
  background-color: #11838a;
  width: fit-content;
  wrap: wrap;
  text-wrap: wrap;
  color: white;
  border-radius: 2px;
  padding: 2px 5px;
  margin: 3px 3px;
`;

export const Rating = styled.span`
  font-size: 0.8rem;
`;
