import React, { useEffect, useState } from "react";
import { CardPlan, CardPlanRow } from "../styled.components";
// import PlansCard from "./PlansCard";
// API
const baseUrl = "http://private-59658d-celulardireto2017.apiary-mock.com";

const PlansList = () => {
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
    <div className=".PlansList">
      <h1>Planos</h1>
      {infos.plataformas && (
          <CardPlanRow>
        <ul>
          {infos.plataformas.map((plataforma, index) => (
            <li key={plataforma.sku}>
                <CardPlan>
                     {plataforma.descricao}
                </CardPlan>
              {/* <PlansCard
                sku={plataforma.sku}
                indexButton={index}
                descricao={plataforma.descricao}
                showDetails={showDetailsByPlatform === plataforma.sku}
                onClickShowMore={() =>
                  toggleShowDetailsByPlatform(plataforma.sku)
                }
              /> */}
            </li>
          ))}
        </ul>
        </CardPlanRow>
      )}
    </div>
  );
};

export default PlansList;
