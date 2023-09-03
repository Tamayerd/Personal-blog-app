import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBarFilter.css"
import { Button } from "@material-tailwind/react";

var data = require("../data.json");

const SearchBarFilter = () => {
  const [value, setValue] = useState("");
  const [resultId, setResultId] = useState("");
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    //buradan ilgili yere gidebilirsin fetch ile
    setValue(event.name);
    setResultId(event.id);
  };
  return (
    <div class="w-36 flex mr-56">
      <div class="flex">
        <input
          type="text"
          placeholder="Eat something.."
          className="rounded-md px-4 py-2  border-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={value}
          onChange={handleInputChange}
        />
        <Link
          to={`/mealrecepies/${String(resultId)}`}
          key={resultId}
          onClick={() => {
            handleSubmit(value);
            setValue("");
          }}
          
        >
        <Button  style={{backgroundColor: "red"}}>Search</Button>
        </Link>
      </div>
      <div class="bg-slate-300 flex  border-solid">
        {data
          .filter((item) => {
            const searchTerm = String(value).toLowerCase();
            const name = String(item.name).toLowerCase();

            return (
              searchTerm && name.startsWith(searchTerm) && name !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <>
              <div
                onClick={() => handleSubmit(item)}
                class=" bg-white p-5 rounded "
                key={item.id}
              >
                {item.name}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default SearchBarFilter;
