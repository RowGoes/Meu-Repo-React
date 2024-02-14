import { useState } from "react";
import Botao from "../Botao";
import "./style.css";

const Contador = () => {
    const [valor, setValor] = useState(0);

    const incrementar = () => {
        // setValor(Valor + 1);
        // boa pratica:
        setValor((valorAnterior) => valorAnterior + 1);
    };

    const decrementar = () => {
        // setValor(Valor - 1);
        // boa pratica:
        setValor((valorAnterior) => valorAnterior - 1); 
    };

    return (
        <section className="contador-section">
        <h1>Contador</h1>
        <main className="contador-main">
            <Botao texto="+" acao={incrementar} />
            <h2 className="contador-value">{valor}</h2>
            <Botao texto="-" acao={decrementar} />
        </main>
    </section>
    );
};

export default Contador;
