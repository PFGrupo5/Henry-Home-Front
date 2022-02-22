import React from "react";
import "antd/dist/antd.css";
import PlacesAutocomplete, {
 
} from "react-places-autocomplete";
// import { Cascader } from "antd";

// export const provinces = [
//   "Todas las provincias",
//   "Buenos Aires",
//   "Capital Federal",
//   "Catamarca",
//   "Chaco",
//   "Chubut",
//   "Córdoba",
//   "Corrientes",
//   "Entre Ríos",
//   "Formosa",
//   "Jujuy",
//   "La Pampa",
//   "La Rioja",
//   "Mendoza",
//   "Misiones",
//   "Neuquén",
//   "Río Negro",
//   "Salta",
//   "San Juan",
//   "San Luis",
//   "Santa Cruz",
//   "Santa Fe",
//   "Santiago del Estero",
//   "Tierra del Fuego",
//   "Tucumán",
// ];

export default function Place({ setInfo, Info ,  }) {
  // const options = provinces.map((e) => {
  //   if (e === "Todas las provincias") { return { input: e, label: e, value: null } }
  //   return { input: e, label: e, value: e };
  // });

  const handleLocSelect =  e=>{

    

    setInfo({ ...Info, location: e })
  }

  const locationChange =  (e) => {
    

    setInfo({ ...Info, location: e });

    console.log(Info)
  }

  return (
    <PlacesAutocomplete 
                      value={Info.location} 
                      onChange={(e)=>locationChange(e)}
                      onSelect={handleLocSelect}
                      >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>( <div>
             <input {...getInputProps({ placeholder:"Ubicacion..." })} />

             <div>
               {loading ? <div>...cargando</div> : null}
               {suggestions.map((suggestion)=>{

                 const style={
                   backgroundColor: suggestion.active ? "#bbbaba" :"#fff"
                 }
               return <div {...getSuggestionItemProps(suggestion,{style})} >

                 {suggestion.description}
                 </div>
                 
                      })}
             </div>
             </div>)
             }

          </PlacesAutocomplete>
    // <Cascader
    //   options={options}
    //   onChange={locationChange}
    //   placeholder="Ubicación..."
    //   className="filter"
    //   allowClear={false}
    // />

  );
}
