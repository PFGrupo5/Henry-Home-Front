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
  }
  if (!pricePerNight) {
    error.pricePerNight = "Precio Por Noche es requerido!";
  }
  if (!numberOfPeople) {
    error.numberOfPeople = "Numero De Personas es requerido!";
  }
  if (!numberOfBeds) {
    error.numberOfBeds = "Numero De Camas es requerido!";
  }
  if (!description) {
    error.description = "La Descripción es requerida!";
  }
  if (!houseRules) {
    error.houseRules = "Las Reglas de la Casa son requerida!";
  }
  if (!facilities) {
    error.facilities = "Las Comodidades son requerida!";
  }
  if (!services) {
    error.services = "Los Servicions son requerida!";
  }
//   if (!location) {
//     error.location = "La Ubicacion es requerida!";
//   }
//   if (!images) {
//     error.images = "La Imagen es requerida!";
//   }
  return error;
};
