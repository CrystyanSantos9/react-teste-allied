import React, { useEffect, useState } from "react";
import { CardPlatform, CardPlatformRow } from "../styled.components";
import {
  Link
} from "react-router-dom";
import PlansList from "../PlansList";
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
    return (
      <div>
        <h1>...carregando</h1>
      </div>
    );
  }

  return (
    <>
      {infos.plataformas && (
        <CardPlatformRow>
          {infos.plataformas.map((plataforma, index) => (
                <CardPlatform>
                     {/* {plataforma.descricao} */}
                     <PlansList descricao={plataforma.descricao} sku={plataforma.sku}/>
                </CardPlatform>
          ))}
          </CardPlatformRow>
      )}
      </>
  );
};

export default PlatformsList;
{/* <Link to="/cart">Eu quero!</Link> */}