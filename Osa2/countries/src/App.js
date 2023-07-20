import { useState, useEffect } from "react";
import axios from "axios";
import ShowCountry from "./components/ShowCountry";

const App = () => {
  const [countries, setcountries] = useState([]);
  const [filteredCountries, setfilteredCountries] = useState([]);
  const [filteredCountry, setfilteredCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setcountries(response.data);
      });
  }, []);

  useEffect(() => {
    const newListFilter = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filteredCountry.toLowerCase())
    );
    setfilteredCountries(newListFilter);
  }, [filteredCountry]);

  const filterCountries = (event) => {
    setfilteredCountry(event.target.value);
  };

  const buttonFilter = (event) => {
    const buttonFilterName = event.target.value;
    setfilteredCountries(
      filteredCountries.filter(
        (country) => country.name.common === buttonFilterName
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          find countries{" "}
          <input value={filteredCountry} onChange={filterCountries}></input>
        </div>
        <ShowCountry
          filteredCountries={filteredCountries}
          buttonFilter={buttonFilter}
        />
      </header>
    </div>
  );
};

export default App;
