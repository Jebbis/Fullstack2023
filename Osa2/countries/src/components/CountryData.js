import CountryWeather from "../services/countryWeather";

const CountryData = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.name.common}</h1>
      <p>capital: {data.capital}</p>
      <p>area: {data.area}</p>
      <p>languages:</p>
      <ul>
        {Object.values(data.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={data.flags.png}></img>
      <CountryWeather data={data} />
    </div>
  );
};

export default CountryData;
