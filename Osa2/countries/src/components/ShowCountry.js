import CountryData from "./CountryData";

const ShowCountry = ({ filteredCountries, buttonFilter }) => {
  return (
    <div>
      {filteredCountries.length === 1 ? (
        <CountryData data={filteredCountries[0]} />
      ) : filteredCountries.length > 10 ? (
        <div>narrow down the name</div>
      ) : (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.name.common}>
              {country.name.common}
              <button value={country.name.common} onClick={buttonFilter}>
                show
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowCountry;
