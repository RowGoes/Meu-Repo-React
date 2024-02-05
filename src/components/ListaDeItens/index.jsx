const ListaDeItens = ({ label, opcoes }) => {
   
    return (
    <div>
        <label>{label}</label>
        <select>
            {opcoes.map((elemento, index) =>
            <option key={index}>{elemento}</option>
            )}
        </select>
    </div>
    );
};

export default ListaDeItens;