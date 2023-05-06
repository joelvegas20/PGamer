import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* z-index: -1; */
    
  width: 100%;
  height: 100%;
  /* no scroll */
`;

export const PrincipalImage = styled.div`
  display: flex;
  position: absolute;
  top: -10%;
  right: -5%;
  z-index: -1;
  /* background-color: #F43435; */

  height: 100%;
`;

export const Image = styled.img`
  height: 130%;
`;

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  /* height: 70vh; */

  /* background-color: #f4fc; */
  margin-top: 5rem;
  padding-left: 5rem;

  /* margin-top: 5rem; */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #ff4f33;
  width: 100%;
  /* height: 50vh; */
  /* background-color: #441323; */
  font-size: 2rem;
  font-weight: 400;

  letter-spacing: 0.3rem;

  user-select: none;

  text-shadow: 0px 4px 4px #0000008f;

  /* align-items: center; */
  /* margin-top: 5rem; */
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #11838a;
  /* background-color: #f4fc23; */
  width: 60%;
  /* height: 50vh; */
  /* justify-content: center;\ */
  font-size: 1.7rem;
  user-select: none;
  padding-left: 1.5rem;

  /* align-items: center; */
  /* margin-top: 5rem; */
  /* text-shadow: -4px 0px 4px #000011; */
`;

export const ButtonStyle = styled.button`
  background-color: #ff4f33;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: Press-Start-2P, sans-serif;
  font-weight: 600;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;
  border: none;
  user-select: none;
  box-shadow: -4px 4px 4px #0000008f;
`;
