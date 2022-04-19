import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "../estilos/menu.css"

export default function Menu({change}){

    const data = useSelector(state => {
        return state.reducer
    })

    const [total, setTotal] = useState(50*data["50"] + 100*data["100"] + 200*data["200"] + 500*data["500"] + 1000*data["1000"]);
    const [coin, setCoin] = useState("50");
    const [count, setCount] = useState(0);
    const [coinT, setCoinT] = useState("50");
    const [countTotal, setCountTotal] = useState(0);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        if(e.target.name === "coin"){
            setCoin(e.target.value)
        }else{
            setCoinT(e.target.value)
        }
    }

    useEffect(()=>{
        setCount(data[coin]);
        setCountTotal(data[coinT] * parseInt(coinT))
    },[coin, coinT]);

    return(
        <div>
            <div className="container-info">
                <div className="container-change-menu" onClick={change}>
                    <span>{"<"} Ingresar Dinero</span>
                </div>
                <h1 className="title">Alcancia Piggy</h1>
                <div className="total-money">
                    <p>Dinero total:</p>
                    <span>${total}</span>
                </div>
                <div className="quantity-coin">
                    <div className="coin-counter">
                        <p>Monedas de ${coin}</p>
                        <p className="contador">{count}</p>
                    </div>
                    <span>Moneda:</span>
                    <select name="coin" value={coin} onChange={handleChange}>
                        <option value={"50"}>$50</option>
                        <option value={"100"}>$100</option>
                        <option value={"200"}>$200</option>
                        <option value={"500"}>$500</option>
                        <option value={"1000"}>$1000</option>
                    </select>
                </div>
                <div className="quantity-coin">
                    <div className="coin-counter">
                        <p>Cantidad total en monedas de ${coinT}</p>
                        <p className="contador">${countTotal}</p>
                    </div>
                    <span>Moneda:</span>
                    <select name="coinT" value={coinT} onChange={handleChange}>
                        <option value={"50"}>$50</option>
                        <option value={"100"}>$100</option>
                        <option value={"200"}>$200</option>
                        <option value={"500"}>$500</option>
                        <option value={"1000"}>$1000</option>
                    </select>
                </div>
            </div>
        </div>
    )
}