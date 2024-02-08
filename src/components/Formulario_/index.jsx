import CaixaDeTexto from "../CaixaDeTexto";
import ListaDeItens from "../ListaDeItens";

const Formulario = () => {
    const listaCargos = ["Backend", "Desing", "Frontend", "Datascience"];
    return (
    <>
    <b>Preencha com os dados da mulher referência para criar um card</b>

    <CaixaDeTexto label="Nome" placeholder="Digite o seu nome..." />
    <CaixaDeTexto label="Cargo" placeholder="Digite o seu cargo..." />
    <CaixaDeTexto label="Imagem" placeholder="Digite o endereço da sua imagem..." />
    
    <ListaDeItens label="Time" opcoes={listaCargos}/>
    </>
    );
};

export default Formulario;
