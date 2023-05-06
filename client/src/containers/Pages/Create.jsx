import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../hocs/layouts/Layout";
import { getAllGenres, postVideogame } from "../../redux/actions";
import {
  ButtonCreate,
  ErrorStyle,
  Form,
  FormContainerLeft,
  FormContainerRigth,
  Genre,
  GenresContainer,
  TitleLabel,
} from "../../styles/pages/Create.style";
import { validate, verificarCampos } from "./validateFormPage";

export default function Create() {
  const dispatch = useDispatch();
  // Global States.
  const genres = useSelector((state) => state.genres);

  const navigate = useNavigate();

  // Local States.
  // Form State Management.
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0.0,
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: "",
  });

  function createVideoGame(form) {

    // Separate platforms by comma.
    form.platforms = form.platforms?.split(",").map((p) => p.trim());

    dispatch(postVideogame(form));

    navigate(-1, { replace: true });
    
  }

  //Esta funcion va escribiendo en tiempo real
  //los atributos del formulario en el estado

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });

    setErrors(validate({ ...form, [property]: value }, errors));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!verificarCampos(form)) {
      return;
    }

    createVideoGame(form);

  };

  const handleChangeGenres = (event) => {
    const genre = event.target.value;
    if (event.target.checked) {
      form.genres.push(Number(genre));
    } else {
      form.genres = form.genres.filter((g) => g !== genre);
    }
  };

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <Layout>
      <h1>Create Videogame</h1>
      {/* <FormContainer> */}
      <Form action="">
        <FormContainerLeft>
          <TitleLabel htmlFor="">Name</TitleLabel>
          <input
            type="text"
            name="name"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.name}</ErrorStyle>
          <TitleLabel htmlFor="">Image</TitleLabel>
          <input
            type="text"
            name="image"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.image}</ErrorStyle>
          <TitleLabel htmlFor="">Description</TitleLabel>
          <input
            type="text"
            name="description"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.description}</ErrorStyle>
          <TitleLabel htmlFor="">Platforms</TitleLabel>
          <input
            type="text"
            name="platforms"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.platforms}</ErrorStyle>

          <TitleLabel htmlFor="">Released</TitleLabel>

          <input
            type="date"
            name="released"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.released}</ErrorStyle>

          <TitleLabel htmlFor="">Rating</TitleLabel>
          <input
            type="text"
            name="rating"
            id=""
            onChange={(event) => handleChange(event)}
          />
          <ErrorStyle>{errors.rating}</ErrorStyle>
        </FormContainerLeft>

        <FormContainerRigth>
            <TitleLabel htmlFor="">Genres</TitleLabel>
          <GenresContainer>
            {genres.map((genre) => {
              return (
                <Genre key={genre.id}>
                  <input
                    type="checkbox"
                    name="genres"
                    id=""
                    value={genre.id}
                    onChange={(event) => handleChangeGenres(event)}
                  />
                  <label htmlFor="">{genre.name}</label>
                </Genre>
              );
            })}
          </GenresContainer>
          <ErrorStyle>{errors.genres}</ErrorStyle>
        </FormContainerRigth>
        <ButtonCreate onClick={(event) => submitHandler(event)}>Create</ButtonCreate>
      </Form>
      {/* </FormContainer> */}
    </Layout>
  );
}
