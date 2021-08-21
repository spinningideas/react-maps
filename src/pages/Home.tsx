import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GeoDataService } from "services/GeoDataService";

const Home: React.FC = () => {
  const [geoData, setGeoData] = useState<any>();
  const geoDataService = new GeoDataService();

  useEffect(() => {
    const loadData = async () => {
      let data = await geoDataService.getMapDataGeoCountries();
      setGeoData(data);
    };
    loadData();
  }, []);

  return (
    <>
      <h2>About This App</h2>
      <div>This purpose of this application is to demonstrate options to render world maps in React JS </div>
      <h3>Libraries Used</h3>
      <div><a href="https://www.react-simple-maps.io/examples/" target="_blank">react-simple-maps</a></div>
      <div><a href="https://github.com/wwayne/react-tooltip/" target="_blank">react-tooltip</a></div>
    </>
  );
};

export default Home;
