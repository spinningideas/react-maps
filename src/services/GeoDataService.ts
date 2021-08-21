import { Country } from "models/Country";
import { FeatureCollection } from "models/FeatureCollection";

export class GeoDataService {
  convertToPascalCase(val: string) {
    // returns val in "PascalCase" (first char upper, rest lowered)
    return (val = val.replace(/\w+/g, (w) => {
      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    }));
  }

  convertToKebabCase(val: string): string {
    if (val) {
      // returns val in "kebab-case" lowered
      let kebab = val.replace(/\s+/g, "-").replace(".", "").toLowerCase();
      return kebab;
    }
    return "";
  }

  convertToSnakeCase(val: string): string {
    if (val) {
      // returns val in "snake_case" lowered
      let snakeCase: string = val
        .replace(/\s+/g, "_")
        .replace(".", "")
        .toLowerCase();
      return snakeCase;
    }
    return "";
  }

  getDefaultCountryCode() {
    return "US";
  }

  getDefaultCountry() {
    let country = new Country();
    country.countryCode = this.getDefaultCountryCode();
    country.countryName = "United States";
    return country;
  }

  getCountryFromCode(code: string) {
    let countries = this.getCountries();
    let codeUpper = code.toUpperCase();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].countryCode === codeUpper) {
        return countries[i];
      }
    }
    return null;
  }

  getCountryNameFromCode(code: string) {
    let countries = this.getCountries();
    let codeUpper = code.toUpperCase();
    for (let i = 0; i < countries.length; i++) {
      if (
        countries[i].countryName &&
        countries[i].countryCode &&
        countries[i].countryCode === codeUpper
      ) {
        return countries[i].countryName;
      }
    }
    return null;
  }

  getCountryCodeFromName(name: string) {
    let countries = this.getCountries();
    let nameLower = name.toLowerCase();
    for (let i = 0; i < countries.length; i++) {
      if (
        countries[i].countryName &&
        countries[i].countryName.toLowerCase() === nameLower
      ) {
        return countries[i].countryCode;
      }
    }
    return null;
  }

  getCountryCode3FromCountryCode(code: string) {
    let countries = this.getCountries();
    let codeUpper = code.toUpperCase();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].countryCode === codeUpper) {
        return countries[i].countryCode3;
      }
    }
    return null;
  }

  getCountryFromCountryCode3(code3: string) {
    let countries = this.getCountries();
    for (let i = 0; i < countries.length; i++) {
      if (countries[i].countryCode3.toLowerCase() === code3.toLowerCase()) {
        return countries[i];
      }
    }
    return null;
  }

  getCountryCodeFromCountryCode3(code3: string) {
    let country = this.getCountryFromCountryCode3(code3);
    return country && country.countryCode ? country.countryCode : null;
  }

  getCountries() {
    // Static dataset of subset of countries
    return [
      {
        countryCode: "AF",
        countryCode3: "AFG",
        countryName: "Afghanistan",
      },
      {
        countryCode: "AL",
        countryCode3: "ALB",
        countryName: "Albania",
      },
      {
        countryCode: "DZ",
        countryCode3: "DZA",
        countryName: "Algeria",
      },
      {
        countryCode: "AO",
        countryCode3: "AGO",
        countryName: "Angola",
      },
      {
        countryCode: "AR",
        countryCode3: "ARG",
        countryName: "Argentina",
      },
      {
        countryCode: "AM",
        countryCode3: "ARM",
        countryName: "Armenia",
      },
      {
        countryCode: "AW",
        countryCode3: "ABW",
        countryName: "Aruba",
      },
      {
        countryCode: "AU",
        countryCode3: "AUS",
        countryName: "Australia",
      },
      {
        countryCode: "AT",
        countryCode3: "AUT",
        countryName: "Austria",
      },
      {
        countryCode: "BS",
        countryCode3: "BHS",
        countryName: "Bahamas",
      },
      {
        countryCode: "BB",
        countryCode3: "BRB",
        countryName: "Barbados",
      },
      {
        countryCode: "BY",
        countryCode3: "BLR",
        countryName: "Belarus",
      },
      {
        countryCode: "BE",
        countryCode3: "BEL",
        countryName: "Belgium",
      },
      {
        countryCode: "BZ",
        countryCode3: "BLZ",
        countryName: "Belize",
      },
      {
        countryCode: "BJ",
        countryCode3: "BEN",
        countryName: "Benin",
      },
      {
        countryCode: "BM",
        countryCode3: "BMU",
        countryName: "Bermuda",
      },
      {
        countryCode: "BT",
        countryCode3: "BTN",
        countryName: "Bhutan",
      },
      {
        countryCode: "BO",
        countryCode3: "BOL",
        countryName: "Bolivia",
      },
      {
        countryCode: "BW",
        countryCode3: "BWA",
        countryName: "Botswana",
      },
      {
        countryCode: "BR",
        countryCode3: "BRA",
        countryName: "Brazil",
      },
      {
        countryCode: "BG",
        countryCode3: "BGR",
        countryName: "Bulgaria",
      },
      {
        countryCode: "KH",
        countryCode3: "KHM",
        countryName: "Cambodia",
      },
      {
        countryCode: "CM",
        countryCode3: "CMR",
        countryName: "Cameroon",
      },
      {
        countryCode: "CA",
        countryCode3: "CAN",
        countryName: "Canada",
      },
      {
        countryCode: "KY",
        countryCode3: "CYM",
        countryName: "Cayman Islands",
      },
      {
        countryCode: "CF",
        countryCode3: "CAF",
        countryName: "Central African Republic",
      },
      {
        countryCode: "TD",
        countryCode3: "TCD",
        countryName: "Chad",
      },
      {
        countryCode: "CL",
        countryCode3: "CHL",
        countryName: "Chile",
      },
      {
        countryCode: "CN",
        countryCode3: "CHN",
        countryName: "China",
      },
      {
        countryCode: "CO",
        countryCode3: "COL",
        countryName: "Colombia",
      },
      {
        countryCode: "KM",
        countryCode3: "COM",
        countryName: "Comoros",
      },
      {
        countryCode: "CR",
        countryCode3: "CRI",
        countryName: "Costa Rica",
      },
      {
        countryCode: "HR",
        countryCode3: "HRV",
        countryName: "Croatia",
      },
      {
        countryCode: "CU",
        countryCode3: "CUB",
        countryName: "Cuba",
      },
      {
        countryCode: "CY",
        countryCode3: "CYP",
        countryName: "Cyprus",
      },
      {
        countryCode: "CZ",
        countryCode3: "CZE",
        countryName: "Czechia",
      },
      {
        countryCode: "DK",
        countryCode3: "DNK",
        countryName: "Denmark",
      },
      {
        countryCode: "DO",
        countryCode3: "DOM",
        countryName: "Dominican Republic",
      },
      {
        countryCode: "EC",
        countryCode3: "ECU",
        countryName: "Ecuador",
      },
      {
        countryCode: "EG",
        countryCode3: "EGY",
        countryName: "Egypt",
      },
      {
        countryCode: "SV",
        countryCode3: "SLV",
        countryName: "El Salvador",
      },
      {
        countryCode: "ET",
        countryCode3: "ETH",
        countryName: "Ethiopia",
      },
      {
        countryCode: "FJ",
        countryCode3: "FJI",
        countryName: "Fiji",
      },
      {
        countryCode: "FI",
        countryCode3: "FIN",
        countryName: "Finland",
      },
      {
        countryCode: "FR",
        countryCode3: "FRA",
        countryName: "France",
      },
      {
        countryCode: "PF",
        countryCode3: "PYF",
        countryName: "French Polynesia",
      },
      {
        countryCode: "GA",
        countryCode3: "GAB",
        countryName: "Gabon",
      },
      {
        countryCode: "GM",
        countryCode3: "GMB",
        countryName: "Gambia",
      },
      {
        countryCode: "GE",
        countryCode3: "GEO",
        countryName: "Georgia",
      },
      {
        countryCode: "DE",
        countryCode3: "DEU",
        countryName: "Germany",
      },
      {
        countryCode: "GH",
        countryCode3: "GHA",
        countryName: "Ghana",
      },
      {
        countryCode: "GR",
        countryCode3: "GRC",
        countryName: "Greece",
      },
      {
        countryCode: "GU",
        countryCode3: "GUM",
        countryName: "Guam",
      },
      {
        countryCode: "GT",
        countryCode3: "GTM",
        countryName: "Guatemala",
      },
      {
        countryCode: "HT",
        countryCode3: "HTI",
        countryName: "Haiti",
      },
      {
        countryCode: "HN",
        countryCode3: "HND",
        countryName: "Honduras",
      },
      {
        countryCode: "HK",
        countryCode3: "HKG",
        countryName: "Hong Kong",
      },
      {
        countryCode: "HU",
        countryCode3: "HUN",
        countryName: "Hungary",
      },
      {
        countryCode: "IS",
        countryCode3: "ISL",
        countryName: "Iceland",
      },
      {
        countryCode: "IN",
        countryCode3: "IND",
        countryName: "India",
      },
      {
        countryCode: "ID",
        countryCode3: "IDN",
        countryName: "Indonesia",
      },
      {
        countryCode: "IR",
        countryCode3: "IRN",
        countryName: "Iran",
      },
      {
        countryCode: "IQ",
        countryCode3: "IRQ",
        countryName: "Iraq",
      },
      {
        countryCode: "IE",
        countryCode3: "IRL",
        countryName: "Ireland",
      },
      {
        countryCode: "IL",
        countryCode3: "ISR",
        countryName: "Israel",
      },
      {
        countryCode: "IT",
        countryCode3: "ITA",
        countryName: "Italy",
      },
      {
        countryCode: "CI",
        countryCode3: "CIV",
        countryName: "Ivory Coast",
      },
      {
        countryCode: "JM",
        countryCode3: "JAM",
        countryName: "Jamaica",
      },
      {
        countryCode: "JP",
        countryCode3: "JPN",
        countryName: "Japan",
      },
      {
        countryCode: "JO",
        countryCode3: "JOR",
        countryName: "Jordan",
      },
      {
        countryCode: "KE",
        countryCode3: "KEN",
        countryName: "Kenya",
      },
      {
        countryCode: "KW",
        countryCode3: "KWT",
        countryName: "Kuwait",
      },
      {
        countryCode: "LA",
        countryCode3: "LAO",
        countryName: "Laos",
      },
      {
        countryCode: "LB",
        countryCode3: "LBN",
        countryName: "Lebanon",
      },
      {
        countryCode: "LT",
        countryCode3: "LTU",
        countryName: "Lithuania",
      },
      {
        countryCode: "LU",
        countryCode3: "LUX",
        countryName: "Luxembourg",
      },
      {
        countryCode: "MG",
        countryCode3: "MDG",
        countryName: "Madagascar",
      },
      {
        countryCode: "MW",
        countryCode3: "MWI",
        countryName: "Malawi",
      },
      {
        countryCode: "MY",
        countryCode3: "MYS",
        countryName: "Malaysia",
      },
      {
        countryCode: "MV",
        countryCode3: "MDV",
        countryName: "Maldives",
      },
      {
        countryCode: "ML",
        countryCode3: "MLI",
        countryName: "Mali",
      },
      {
        countryCode: "MT",
        countryCode3: "MLT",
        countryName: "Malta",
      },
      {
        countryCode: "MQ",
        countryCode3: "MTQ",
        countryName: "Martinique",
      },
      {
        countryCode: "MR",
        countryCode3: "MRT",
        countryName: "Mauritania",
      },
      {
        countryCode: "MX",
        countryCode3: "MEX",
        countryName: "Mexico",
      },
      {
        countryCode: "ME",
        countryCode3: "MNE",
        countryName: "Montenegro",
      },
      {
        countryCode: "MA",
        countryCode3: "MAR",
        countryName: "Morocco",
      },
      {
        countryCode: "MZ",
        countryCode3: "MOZ",
        countryName: "Mozambique",
      },
      {
        countryCode: "MM",
        countryCode3: "MMR",
        countryName: "Myanmar [Burma]",
      },
      {
        countryCode: "NA",
        countryCode3: "NAM",
        countryName: "Namibia",
      },
      {
        countryCode: "NP",
        countryCode3: "NPL",
        countryName: "Nepal",
      },
      {
        countryCode: "NL",
        countryCode3: "NLD",
        countryName: "Netherlands",
      },
      {
        countryCode: "NC",
        countryCode3: "NCL",
        countryName: "New Caledonia",
      },
      {
        countryCode: "NZ",
        countryCode3: "NZL",
        countryName: "New Zealand",
      },
      {
        countryCode: "NI",
        countryCode3: "NIC",
        countryName: "Nicaragua",
      },
      {
        countryCode: "NE",
        countryCode3: "NER",
        countryName: "Niger",
      },
      {
        countryCode: "NG",
        countryCode3: "NGA",
        countryName: "Nigeria",
      },
      {
        countryCode: "NO",
        countryCode3: "NOR",
        countryName: "Norway",
      },
      {
        countryCode: "OM",
        countryCode3: "OMN",
        countryName: "Oman",
      },
      {
        countryCode: "PK",
        countryCode3: "PAK",
        countryName: "Pakistan",
      },
      {
        countryCode: "PA",
        countryCode3: "PAN",
        countryName: "Panama",
      },
      {
        countryCode: "PG",
        countryCode3: "PNG",
        countryName: "Papua New Guinea",
      },
      {
        countryCode: "PY",
        countryCode3: "PRY",
        countryName: "Paraguay",
      },
      {
        countryCode: "PE",
        countryCode3: "PER",
        countryName: "Peru",
      },
      {
        countryCode: "PH",
        countryCode3: "PHL",
        countryName: "Philippines",
      },
      {
        countryCode: "PL",
        countryCode3: "POL",
        countryName: "Poland",
      },
      {
        countryCode: "PT",
        countryCode3: "PRT",
        countryName: "Portugal",
      },
      {
        countryCode: "QA",
        countryCode3: "QAT",
        countryName: "Qatar",
      },
      {
        countryCode: "RO",
        countryCode3: "ROU",
        countryName: "Romania",
      },
      {
        countryCode: "RU",
        countryCode3: "RUS",
        countryName: "Russia",
      },
      {
        countryCode: "RW",
        countryCode3: "RWA",
        countryName: "Rwanda",
      },
      {
        countryCode: "WS",
        countryCode3: "WSM",
        countryName: "Samoa",
      },
      {
        countryCode: "SA",
        countryCode3: "SAU",
        countryName: "Saudi Arabia",
      },
      {
        countryCode: "SN",
        countryCode3: "SEN",
        countryName: "Senegal",
      },
      {
        countryCode: "RS",
        countryCode3: "SRB",
        countryName: "Serbia",
      },
      {
        countryCode: "SC",
        countryCode3: "SYC",
        countryName: "Seychelles",
      },
      {
        countryCode: "SL",
        countryCode3: "SLE",
        countryName: "Sierra Leone",
      },
      {
        countryCode: "SG",
        countryCode3: "SGP",
        countryName: "Singapore",
      },
      {
        countryCode: "SK",
        countryCode3: "SVK",
        countryName: "Slovakia",
      },
      {
        countryCode: "SI",
        countryCode3: "SVN",
        countryName: "Slovenia",
      },
      {
        countryCode: "SO",
        countryCode3: "SOM",
        countryName: "Somalia",
      },
      {
        countryCode: "ZA",
        countryCode3: "ZAF",
        countryName: "South Africa",
      },
      {
        countryCode: "KR",
        countryCode3: "KOR",
        countryName: "South Korea",
      },
      {
        countryCode: "ES",
        countryCode3: "ESP",
        countryName: "Spain",
      },
      {
        countryCode: "LK",
        countryCode3: "LKA",
        countryName: "Sri Lanka",
      },
      {
        countryCode: "SD",
        countryCode3: "SDN",
        countryName: "Sudan",
      },
      {
        countryCode: "SR",
        countryCode3: "SUR",
        countryName: "Suriname",
      },
      {
        countryCode: "SE",
        countryCode3: "SWE",
        countryName: "Sweden",
      },
      {
        countryCode: "CH",
        countryCode3: "CHE",
        countryName: "Switzerland",
      },
      {
        countryCode: "SY",
        countryCode3: "SYR",
        countryName: "Syria",
      },
      {
        countryCode: "TW",
        countryCode3: "TWN",
        countryName: "Taiwan",
      },
      {
        countryCode: "TZ",
        countryCode3: "TZA",
        countryName: "Tanzania",
      },
      {
        countryCode: "TH",
        countryCode3: "THA",
        countryName: "Thailand",
      },
      {
        countryCode: "TN",
        countryCode3: "TUN",
        countryName: "Tunisia",
      },
      {
        countryCode: "TR",
        countryCode3: "TUR",
        countryName: "Turkey",
      },
      {
        countryCode: "UG",
        countryCode3: "UGA",
        countryName: "Uganda",
      },
      {
        countryCode: "UA",
        countryCode3: "UKR",
        countryName: "Ukraine",
      },
      {
        countryCode: "GB",
        countryCode3: "GBR",
        countryName: "United Kingdom",
      },
      {
        countryCode: "US",
        countryCode3: "USA",
        countryName: "United States",
      },
      {
        countryCode: "UY",
        countryCode3: "URY",
        countryName: "Uruguay",
      },
      {
        countryCode: "VE",
        countryCode3: "VEN",
        countryName: "Venezuela",
      },
      {
        countryCode: "VN",
        countryCode3: "VNM",
        countryName: "Vietnam",
      },
      {
        countryCode: "YE",
        countryCode3: "YEM",
        countryName: "Yemen",
      },
      {
        countryCode: "ZM",
        countryCode3: "ZMB",
        countryName: "Zambia",
      },
      {
        countryCode: "ZW",
        countryCode3: "ZWE",
        countryName: "Zimbabwe",
      },
    ];
  }

  getMapDataGeoUSStates = async (selectedStateName?: string) => {
    if (selectedStateName) {
      return await fetch("data/us-states-geo.json")
        .then((result) => result.json())
        .then((d: any) => {
          let featureCollection = new FeatureCollection();
          let stateData = d.default.features.filter((f: any) => {
            return f.properties.name === selectedStateName;
          });
          if (stateData && stateData.length > 0) {
            let sd = stateData[0] as any;
            featureCollection.features.push(sd);
          }
          return new Promise((resolve) => {
            resolve(featureCollection);
          });
        });
    } else {
      let results = await fetch("data/us-states-geo.json").then((result) =>
        result.json()
      );
      return results;
    }
  };

  getMapDataGeoCountries = async (selectedCountryName?: string) => {
    if (selectedCountryName) {
      return fetch("data/world-countries-geo.json").then((d: any) => {
        let featureCollection = new FeatureCollection();
        let countryData = d.default.features.filter((f: any) => {
          return f.properties.name === selectedCountryName;
        });
        if (countryData && countryData.length > 0) {
          for (let c = 0, cl = countryData.length; c < cl; c++) {
            let cd = countryData[c] as any;
            featureCollection.features.push(cd);
          }
        }
        return new Promise((resolve) => {
          resolve(featureCollection);
        });
      });
    } else {
      let results = await fetch("data/world-countries-geo.json").then(
        (result) => result.json()
      );
      return results;
    }
  };

  getStatesData = async () => {
    return fetch("data/us-states.json").then((d: any) => {
      let statesData = Object.values(d).filter((s: any) => {
        return s.stateCode && s;
      });
      return statesData;
    });
  };

  getState = (featuresCollection: FeatureCollection, stateCode: string) => {
    const state = featuresCollection.features.filter((f: any) => {
      return f.properties.stateCode === stateCode;
    });
    if(state && state.length > 0){
      return state[0];
    }
    return undefined;
  };

  getStateProvinceData = async (
    selectedCountryCode: string,
    selectedStateCode: string
  ) => {
    return fetch("data/world-stateprovinces.json").then((d: any) => {
      let statesData = Object.values(d).filter((s: any) => {
        return (
          s.countryCode === selectedCountryCode &&
          s.stateCode === selectedStateCode
        );
      });
      return statesData;
    });
  };
}
