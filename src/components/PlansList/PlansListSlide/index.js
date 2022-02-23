import React, { useEffect, useState } from "react";
import './style.css'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { SlideButtonPrimary } from '../../styled.components';


const PlansListSlide = ({planos})=>{
    const [listPlanos, setListPlanos] = useState(planos)
    const [current, setCurrent] = useState(0)
    const listPlanosLenght = listPlanos.length
    // useEffect(() => {
    //    console.log(listPlanosLenght)
    //   }, []);

    const nextSlide = () => {
        setCurrent(current === listPlanosLenght - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? 0 : current - 1)
    }

    console.log(current)


      if (!listPlanos || listPlanosLenght <=0) {
        return null;
      }



//  {/* Descrição dos planos da plataforma escolhido */}
//  {planos.planos.map((plano, index) => (
              
//     <li key={plano.sku}>
//       <span>
//         Franquia: {plano.franquia} - Valor: {plano.valor}
//       </span>
//     </li>

//   ))}

return (
    <section className="slider">
        <FaArrowAltCircleLeft  className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight  className="right-arrow" onClick={nextSlide}/>
        {listPlanos.map((plano, index)=>(
            <div
            className={index === current ? 'slide active' : 'slide'}
            key={plano.sku}
            >
                {index === current && (
                    <>
                    <p>
                   {plano.franquia} 
                   </p>
                   <p>
                     R$  { plano.valor} /mês
                   </p>
                  <SlideButtonPrimary>Eu quero!</SlideButtonPrimary>
                   </>
                )}
            </div>

                  
        ))

        }
    </section>
)
}


  export default PlansListSlide;