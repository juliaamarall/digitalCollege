import Tenis from "../assets/Tenis.png"
import "../App.css"
import React, {useState} from "react";

 function Card() {
    // javascript é sempre declarado aqui 
    const [count, setCount] = useState(0)
 
    
      // card 1 - função
    function incrementar() {
      setCount(count + 1)
    }
    
    function decrementar() {
      setCount(count - 1)
    
    }
      return (
    
        <>
        {/* card 01 */}
          <section>
            <div className="card">
              <div>
                <img src={Tenis} alt="Tenis" />
              </div>
    
              <div>
                <h3>Tenis Maneiro</h3>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit</h4>
              </div>
              
              <div className="contagem">
                <button onClick={decrementar}> - </button>
                <p>{count}</p>
                <button onClick={incrementar}> + </button>
              </div>
            </div>
       

            </section>
        </>
      );
    }
export default Card