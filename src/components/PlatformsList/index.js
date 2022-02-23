import React, { useEffect, useState } from "react";
import PlansList from "../PlansList";

import './style.css'

import { CardPlatform, CardPlatformRow } from "../styled.components";
// import PlansCard from "./PlansCard";
// API
const baseUrl = "http://private-59658d-celulardireto2017.apiary-mock.com";

const PlatformsList = () => {
  const [infos, setInfo] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [showDetailsByPlatform, setShowDetailsByPlatform] = useState(null);

  function toggleShowDetailsByPlatform(sku) {
    if (showDetailsByPlatform === sku) {
      setShowDetailsByPlatform(false);
    } else {
      setShowDetailsByPlatform(sku);
    }
  }

  useEffect(() => {
    fetch(
      `https://private-59658d-celulardireto2017.apiary-mock.com/plataformas`
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  if (!infos) {
    return null;
  }

  return (
    <div className="PlansList">
      <h1>Planos</h1>
      {infos.plataformas && (
          <CardPlatformRow>
          {infos.plataformas.map((plataforma, index) => (
                <CardPlatform key={plataforma.sku}>
                     <PlansList
                sku={plataforma.sku}
                indexButton={index}
                descricao={plataforma.descricao}
                showDetails={showDetailsByPlatform === plataforma.sku}
                onClickShowMore={() =>
                  toggleShowDetailsByPlatform(plataforma.sku)
                }
              />
                </CardPlatform>
          ))}
        </CardPlatformRow>
      )}
    </div>
  );
};

export default PlatformsList;
