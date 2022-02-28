export const ValidateFormCreate = ({
  name,
  pricePerNight,
  numberOfPeople,
  description,
  houseRules,
  services,
  facilities,
  numberOfBeds,
  location,
  images,

}) => {
  const error = {};



  if (!name) {
    error.name = "Nombre del alojamiento es requerido!";
  } else if (name === null || name.length === 0 || /^\s+$/.test(name)) {
    error.name = "El nombre es obligatorio";
  }
  if (!pricePerNight) {
    error.pricePerNight = "Precio por noche es requerido!";
  } else if (isNaN(pricePerNight)) {
    error.pricePerNight = "El precio por noche tiene que ser un número";
  } else if (
    pricePerNight === null ||
    pricePerNight.length === 0 ||
    /^\s+$/.test(pricePerNight)
  ) {
    error.pricePerNight = "El precio por noche es obligatorio";
  }
  if (!numberOfPeople) {
    error.numberOfPeople = "Número de personas es requerido!";
  } else if (isNaN(numberOfPeople)) {
    error.numberOfPeople = "El número de personas tiene que ser un número";
  } else if (
    numberOfPeople === null ||
    numberOfPeople.length === 0 ||
    /^\s+$/.test(numberOfPeople)
  ) {
    error.numberOfPeople = "El Número de personas es obligatorio";
  }
  if (!numberOfBeds) {
    error.numberOfBeds = "Número de camas es requerido!";
  } else if (isNaN(numberOfBeds)) {
    error.numberOfBeds = "El número de camas tiene que ser un número";
  } else if (
    numberOfBeds === null ||
    numberOfBeds.length === 0 ||
    /^\s+$/.test(numberOfBeds)
  ) {
    error.numberOfBeds = "El número de camas es obligatorio";
  }
  if (!description) {
    error.description = "La descripción es requerida!";
  } else if (
    description === null ||
    description.length === 0 ||
    /^\s+$/.test(description)
  ) {
    error.description = "La descripción es Obligatoria";
  } else if (description.length >= 500) {
    error.description = "La descripción no puede tener mas de 500 caracteres";
  }
  if (!houseRules) {
    error.houseRules = "Las reglas de la casa son requerida!";
  } else if (
    houseRules === null ||
    houseRules.length === 0 ||
    /^\s+$/.test(houseRules)
  ) {
    error.houseRules = "Las reglas de la casa son obligatorias";
  } else if (houseRules.length >= 500) {
    error.houseRules = "Las reglas de la casa no puede tener mas de 500 caracteres"
  }
  console.log(location)

  if (!location || !location.length) {
    error.location = "La ubicación es obligatoria";
  }


  return error;
};
