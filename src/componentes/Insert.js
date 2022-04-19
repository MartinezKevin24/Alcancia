import Bank from "./Bank";
import {useState} from "react";
import {useDispatch} from "react-redux";
import "../estilos/insert.css";
import {insertCoin, resetPiggy} from "../store/actions";

export default function Insert({change}){

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [coin, setCoin] = useState("50");
    const [price, setPrice] = useState(0);

    const handleChange = (e) => {
        if(e.target.name === "quantity"){
            setQuantity(e.target.value)
        }else{
            setCoin(e.target.value)
        }
    }

    const handleSubmit = () => {
        const coins = parseInt(coin);
        const quantitys = parseInt(quantity);

        setPrice(coins*quantitys);
        dispatch(insertCoin( {[coin]: quantitys}))

        setTimeout(()=>{
            setPrice(0);
        },[1100])

    }

    const reset = () => {
        dispatch(resetPiggy());
    }

    return(
        <div className="container-insert-inside">
            <div className="container-menu" onClick={()=>{change()}}>
                <span>Menú ></span>
            </div>
            <h1 className="title">Alcancia Piggy</h1>
            <div className="container-banks">
                <Bank price={price}/>
            </div>
            <div className="container-form">
                <div>
                    <div className="quantity">
                        <span>Cantidad: </span>
                        <input type="number" name={"quantity"} value={quantity} onChange={handleChange}/>
                    </div>
                    <div className="type-coin">
                        <span>Moneda:</span>
                        <select name="coin" value={coin} onChange={handleChange}>
                            <option value={"50"}>$50</option>
                            <option value={"100"}>$100</option>
                            <option value={"200"}>$200</option>
                            <option value={"500"}>$500</option>
                            <option value={"1000"}>$1000</option>
                        </select>
                    </div>
                    <div className="button-add" onClick={handleSubmit}>
                        <div className="button">
                            <p>Añadir</p>
                        </div>
                    </div>
                    <div className="button-reset" onClick={reset}>
                        <div className="button">
                            <p>Resetear</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}