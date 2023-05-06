//important: Aqui esta la validacion de los campos
export function validate(state, errorsState) {
  const errors = { ...errorsState };

  // Name validation.
  if (!state.name) errors.name = "Nombre Vacio";
  else if (state.name.length < 3) errors.name = "Debe tener mas de 3 letras";
  else errors.name = "";

  // Image validation.
  if (!state.image) errors.image = "Falta la URL de la imagen";
  else if (
    !/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
      state.image
    )
  )
    errors.image = "URL no valida (falta http/https)";
  else errors.image = "";

    // Description validation.
    if (!state.description) errors.description = "Falta la descripcion";
    else if (state.description.length < 10) errors.description = "Debe tener mas de 10 letras";
    else errors.description = "";
    
    // Platforms validation.
    if (!state.platforms) errors.platforms = "Falta la plataforma";
    else if (state.platforms.length < 3) errors.platforms = "Debe tener mas de 3 letras";
    else errors.platforms = "";

    // Released validation , with this format "released": "2022-01-20",.
    if (!state.released) errors.released = "Falta la fecha de lanzamiento";
    else if (state.released.length < 10) errors.released = "Debe tener mas de 10 letras";
    else errors.released = "";
    
        
    // Rating validation is number.
    if (!state.rating) errors.rating = "Falta el rating";
    else if (isNaN(state.rating)) errors.rating = "Debe ser un numero";
    else errors.rating = "";


    // Genres validation.
    if (!state.genres) errors.genres = "Falta el genero";
    else if (state.genres.length < 3) errors.genres = "Debe tener mas de 3 letras";
    else errors.genres = "";


  return errors;
}

export const verificarCampos = ({
  name,
  image,
  description,
  platforms,
  released,
  rating,
  genres,
}) => {
  if (!name || name === "" || !isNaN(name)) return false;
  if (!image || image === "") return false;
  if (!description || description === "") return false;
  if (!platforms || platforms === "") return false;
  if (!released || released === "") return false;
  if (!rating || rating === "") return false;
  if (!genres || genres === "") return false;

  return true;
};
