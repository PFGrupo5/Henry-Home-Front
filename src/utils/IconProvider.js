import * as Unicons from "@iconscout/react-unicons";

const iconObj = {
  wifi: <Unicons.UilWifi />,
  catering: <Unicons.UilUtensilsAlt />,
  "room service": <Unicons.UilBedDouble />,
  shops: <Unicons.UilShop />,
  "pileta": <Unicons.UilSwimmer />,
  gym: <Unicons.UilDumbbell />,
  sauna: <Unicons.UilBath />,
  "detector de humo": <Unicons.UilBan />,
  tv: <Unicons.UilTvRetro />,
  "aire acondicionado": <Unicons.UilSnowFlake />,
  "washing machine": <Unicons.UilTear />,
  "lavaplatos": <Unicons.UilTear />,
  bed: <Unicons.UilBed />,
  people: <Unicons.UilUsersAlt />,
  delete: <Unicons.UilTrashAlt />,
  edit: <Unicons.UilEditAlt />,
  add: <Unicons.UilPlusCircle />,
  github: <Unicons.UilGithub />,
};

export default function iconProvider(icon) {
  return iconObj[icon];
}
