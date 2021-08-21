import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { GeoDataService } from "services/GeoDataService";

const WorldMap: React.FC = () => {
  const [geoData, setGeoData] = useState<any>();
  const [mapTooltipContent, setMapTooltipContent] = useState<string>("");

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
      <ComposableMap data-tip="" projection="geoEqualEarth">
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#ffffff"
                fill="#e0e0e0"
                onMouseEnter={() => {
                  setMapTooltipContent(
                    `${geo.properties.countrycode} — ${geo.properties.name}`
                  );
                }}
                onMouseLeave={() => {
                  setMapTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#e0e0e0",
                    outline: "none",
                  },
                  hover: {
                    fill: "#bbdefb",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#1e88e5",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{mapTooltipContent}</ReactTooltip>
    </>
  );
};

export default WorldMap;
