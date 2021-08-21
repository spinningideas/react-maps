import React, { useEffect, useState } from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";
import { geoCentroid } from "d3-geo";
import { GeoDataService } from "services/GeoDataService";
import { FeatureCollection } from "models/FeatureCollection";

const UnitedStatesMap: React.FC = () => {
  const [geoData, setGeoData] = useState<FeatureCollection>();
  const [mapTooltipContent, setMapTooltipContent] = useState<string>("");
  const geoDataService = new GeoDataService();

  const offsets = {
    VT: [50, -8],
    NH: [34, 2],
    MA: [30, -1],
    RI: [28, 2],
    CT: [35, 10],
    NJ: [34, 1],
    DE: [33, 0],
    MD: [47, 10],
    DC: [49, 21],
  } as any;

  const getState = (data?: FeatureCollection, stateCode?: string): any => {
    if (data && stateCode) {
      return geoDataService.getState(data, stateCode);
    }
    return undefined;
  };

  const GeographyShapes: React.FC<{ geographies: any[] }> = ({
    geographies,
  }) => {
    return (
      <>
        {geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            stroke="#ffffff"
            fill="#e0e0e0"
            onMouseEnter={() => {
              setMapTooltipContent(
                `${geo.properties.stateCode} — ${geo.properties.stateName}`
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
        ))}
      </>
    );
  };

  const GeographyMarkersOrAnnotations: React.FC<{ geographies: any[] }> = ({
    geographies,
  }) => {
    return (
      <>
        {geographies.map((geo) => {
          const centroid = geoCentroid(geo);
          const cur = getState(geoData, geo.properties.stateCode);
          return (
            <g key={geo.rsmKey + "-name"}>
              {cur &&
                centroid[0] > -160 &&
                centroid[0] < -67 &&
                (Object.keys(offsets).indexOf(cur.properties.stateCode) ===
                -1 ? (
                  <Marker coordinates={centroid}>
                    <text y="2" fontSize={14} textAnchor="middle">
                      {cur.properties.stateCode}
                    </text>
                  </Marker>
                ) : (
                  <Annotation
                    connectorProps={{}}
                    subject={centroid}
                    dx={offsets[cur.properties.stateCode][0]}
                    dy={offsets[cur.properties.stateCode][1]}
                  >
                    <text x={4} fontSize={14} alignmentBaseline="middle">
                      {cur.properties.stateCode}
                    </text>
                  </Annotation>
                ))}
            </g>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    const loadData = async () => {
      let data = await geoDataService.getMapDataGeoUSStates();
      setGeoData(data);
    };
    loadData();
  }, []);

  return (
    <>
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <Geographies geography={geoData}>
          {({ geographies }) => {
            return (
              <>
                <GeographyShapes geographies={geographies} />
                <GeographyMarkersOrAnnotations geographies={geographies} />
              </>
            );
          }}
        </Geographies>
      </ComposableMap>
      <ReactTooltip>{mapTooltipContent}</ReactTooltip>
    </>
  );
};

export default UnitedStatesMap;
