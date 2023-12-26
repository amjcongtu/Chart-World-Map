// src/MapComponent.tsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { useCountries } from "../../services/queries/useCountries";
import "leaflet/dist/leaflet.css";
import { formatNumber } from "../../helper/helper";
import { debounce, get } from "lodash";

interface Country {
  cca3: string;
  name: { common: string };
  latlng: number[];
  capital?: string;
  population?: number;
  area?: number;
}

const WorldMap: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const markerRef = React.useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: countries }: any = useCountries();

  const outerBounds = [
    [16.505, 107.09],
    [22.505, 40.09],
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseOverDebounced = debounce((country) => {
    setSelectedCountry(() => {
      return country;
    });
  }, 200);

  return (
    <>
      <div>
        <MapContainer
          bounds={outerBounds}
          style={{ width: "100%", height: "100vh" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countries &&
            countries.map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (country: any) => {
                return (
                  <>
                    <div ref={markerRef} style={{ zIndex: "9999" }}>
                      <Marker
                        key={country.cca3}
                        position={[country.latlng[0], country.latlng[1]]}
                        eventHandlers={{
                          mouseover: () => {
                            handleMouseOverDebounced(country);
                          },
                        }}
                      >
                        <Popup>{get(country, "name.common", "")}</Popup>
                      </Marker>
                    </div>
                  </>
                );
              }
            )}

          {selectedCountry && (
            <Popup
              position={[selectedCountry.latlng[0], selectedCountry.latlng[1]]}
            >
              <div>
                <h2>{get(selectedCountry, "name.common", "")}</h2>
                <p>Thủ đô: {get(selectedCountry, "capital", "")}</p>
                <p>
                  Dân số:{" "}
                  {selectedCountry.population &&
                    formatNumber(selectedCountry.population)}
                </p>
                <p>
                  Diện tích:{" "}
                  {selectedCountry.area && formatNumber(selectedCountry.area)}{" "}
                  km²
                </p>
              </div>
            </Popup>
          )}
          <GeoJSON data={countries} />
        </MapContainer>
      </div>
    </>
  );
};

export default WorldMap;
