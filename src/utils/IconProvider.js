import * as Unicons from "@iconscout/react-unicons";

const iconObj = {
  wifi: <Unicons.UilWifi />,
  catering: <Unicons.UilUtensilsAlt />,
  "room service": <Unicons.UilBedDouble />,
  "shops ": <Unicons.UilShop />,
  pool: <Unicons.UilSwimmer />,
  gym: <Unicons.UilDumbbell />,
  sauna: <Unicons.UilBath />,
  "smoke detector": <Unicons.UilBan />,
  tv: <Unicons.UilTvRetro />,
  "air conditioning ": <Unicons.UilSnowFlake />,
  "washing machine": <Unicons.UilTear />,
  dishwasher: <Unicons.UilTear />,
  bed: <Unicons.UilBed />,
  people: <Unicons.UilUsersAlt />,
  delete: <Unicons.UilTrashAlt />,
  edit: <Unicons.UilEditAlt />,
  add: <Unicons.UilPlusCircle />,
};

export default function iconProvider (icon) {
    return iconObj[icon]
}



