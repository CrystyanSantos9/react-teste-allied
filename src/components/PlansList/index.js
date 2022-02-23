import React, { useEffect, useState } from "react";
import PlansListSlide from "./PlansListSlide";
import {CardPlatformDescriptionTitle} from '../styled.components';

// API
const baseUrl = "http://private-59658d-celulardireto2017.apiary-mock.com";

const PlansList = ({ sku, descricao, showDetails, onClickShowMore }) => {
  const [skuId, setSkuId] = useState(sku);
  const [descricaoId, setDescricaoId] = useState(descricao);
  const [planos, setPlano] = useState({});

  useEffect(() => {
    fetch(
      `https://private-59658d-celulardireto2017.apiary-mock.com/planos/${skuId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPlano(data);
        // console.log(data);
      });
  }, []);

  // const handlePlan = () => {
  //   setShowMoreDetails(!showMoreDetails);
  // };

  if (!skuId) {
    return null;
  }

  return (
    <div>
      {/* Descrição da Plataforma escolhida */}
      {/* <button onClick={()=> onClickShowMore()}>{descricaoId}</button> */}
      {/* {planos.planos && showDetails && ( */}
        {planos.planos && (
       <>
        <CardPlatformDescriptionTitle>{descricaoId}</CardPlatformDescriptionTitle>
         <PlansListSlide planos={planos.planos}/>
         </>
      )}
    </div>
  );
};

export default PlansList;
