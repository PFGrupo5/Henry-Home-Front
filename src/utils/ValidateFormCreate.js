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
    error.name = "El Nombre es Obligatorio";
  }
  if (!pricePerNight) {
    error.pricePerNight = "Precio Por Noche es requerido!";
  } else if (isNaN(pricePerNight)) {
    error.pricePerNight = "El Precio Por Noche Tiene que ser un numero";
  } else if (
    pricePerNight === null ||
    pricePerNight.length === 0 ||
    /^\s+$/.test(pricePerNight)
  ) {
    error.pricePerNight = "El Precio Por Noche es Obligatorio";
  }
  if (!numberOfPeople) {
    error.numberOfPeople = "Numero De Personas es requerido!";
  } else if (isNaN(numberOfPeople)) {
    error.numberOfPeople = "El Numero De Personas Tiene que ser un numero";
  } else if (
    numberOfPeople === null ||
    numberOfPeople.length === 0 ||
    /^\s+$/.test(numberOfPeople)
  ) {
    error.numberOfPeople = "El Numero De Personas es Obligatorio";
  }
  if (!numberOfBeds) {
    error.numberOfBeds = "Numero De Camas es requerido!";
  } else if (isNaN(numberOfBeds)) {
    error.numberOfBeds = "El Numero De Camas Tiene que ser un numero";
  } else if (
    numberOfBeds === null ||
    numberOfBeds.length === 0 ||
    /^\s+$/.test(numberOfBeds)
  ) {
    error.numberOfBeds = "El Numero De Camas es Obligatorio";
  }
  if (!description) {
    error.description = "La Descripción es requerida!";
  } else if (
    description === null ||
    description.length === 0 ||
    /^\s+$/.test(description)
  ) {
    error.description = "La Descripción es Obligatoria";
  } else if(description.length >= 500){
    error.description = "La Descipcion no puede tener mas de 500 Caracteres"
  }
  if (!houseRules) {
    error.houseRules = "Las Reglas de la Casa son requerida!";
  } else if (
    houseRules === null ||
    houseRules.length === 0 ||
    /^\s+$/.test(houseRules)
  ) {
    error.houseRules = "Las Reglas de la Casa son Obligatorias";
  } else if(houseRules.length >= 500){
    error.houseRules = "Las Reglas de la Casa no puede tener mas de 500 Caracteres"
  }
  console.log(location)
  
 if (!location || !location.length) {
    error.location = "La Ubicacion es Obligatoriaaaa";
  }


  return error;
};
