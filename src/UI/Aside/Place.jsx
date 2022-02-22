import React from "react";
import "antd/dist/antd.css";
import PlacesAutocomplete, {
 
} from "react-places-autocomplete";



export default function Place({ setInfo, Info ,  }) {
  

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
               return <div key={suggestion.description} {...getSuggestionItemProps(suggestion,{style})} >

                 {suggestion.description}
                 </div>
                 
                      })}
             </div>
             </div>)
             }

          </PlacesAutocomplete>
    

  );
}
