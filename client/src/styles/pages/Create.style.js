import styled from "styled-components";


export const FormContainerLeft = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40%;
    border-radius: 10px;
    /* margin-bottom: 20px; */

`
export const FormContainerRigth = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* justify-content: center; */
    /* background-color: #F4F3; */
    width: 60%;
    border-radius: 10px;
    padding: 10px;
    /* margin-bottom: 20px; */

`

export const GenresContainer = styled.div`

    display: flex;

    flex-wrap: wrap; 



`

export const TitleLabel = styled.label`

    font-size: .8rem;

`

export const Genre = styled.div`

    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    background-color: #11838a;
    width:fit-content;
    height: fit-content;
    margin: 10px;
    padding: 5px;
    border-radius: 3px;

`

export const Form = styled.form`

    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    /* background-color: #F4FC; */
    box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.75);
    width: 80%;
    height: 70vh;
    border-radius: 10px;
    /* overflow: scroll; */
    /* margin-bottom: 20px; */
`

export const ErrorStyle = styled.p`

    font-size: .6rem;
    color: white;
    background-color: #ff4f33;
    border-radius: 2px;
    padding: 2px;

`

export const ButtonCreate = styled.button`

    position: absolute;
    z-index: 1;
    cursor: pointer;
    bottom: 10px;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: #11838a;
    color: white;
    border: none;
    margin: 10px;

`