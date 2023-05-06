import styled from "styled-components";

export const PrincipalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #;
  width: 90%;
  height: 90vh;
  overflow-y: hidden;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.3);
`;

export const DescriptionDetail = styled.p`
  font-size: 0.8rem;
  padding: 1rem;
  height: 50%;
  overflow-y: scroll;
`;
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.3);
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #11838a;
  margin: 0;
  padding: 0;
  width: 80%;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Released = styled.span`
  font-size: 1.5rem;
  color: #ff4f33;
  padding: 0;
`;

export const IdVideogame = styled.span`
  font-size: 1.5rem;
  /* background-color:  */
  color: #ff4f33;
  width: 80%;
  text-align: center;
  margin: 2rem 0;
`;

export const Rating = styled.p`
  font-size: 1.5rem;
  color: #11838a;
  margin-top: 1.5rem;
  padding: 0;
`;

export const Platforms = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Platform = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: #f4fcd3;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #11838a;
  border-radius: 5px;
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Genre = styled.span`
  font-size: 0.8rem;
  text-align: center;
  color: #f4fcd3;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #ff4f33;
  border-radius: 5px;
`;

export const BackButton = styled.button`

position: absolute;
top: 1rem;
left: 1rem;
  font-size: 0.8rem;
  text-align: center;
  color: #f4fcd3;
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: #ff4f33;
  border-radius: 5px;
    border: none;

`;
