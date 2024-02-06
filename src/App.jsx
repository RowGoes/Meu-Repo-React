import Header from "./components/Header";
import Rodape from "./components/Rodape";
import ContadorPage from "./components/ContadorPage";
import {Route, Routes} from "react-router-dom";
import ErroPage from "./components/ErroPage";
import SobrePage from "./components/SobrePage";
import SobreMimPage from "./components/SobreMimPage";
import SobrePretaLabPage from "./components/SobrePretaLabPage;
import PokemonPage from "./pages/PokemonPage";
import EnderecoPage from "./components/EnderecoPage";
import EstudantesPage from "./components/EstudantesPage";

function App() {
  return (
    <>
      <Header />

      <div style={{ marginBottom: "130px"}}>
        <Routes>
          <Route path="/" element={<SobreMimPage />} />
          <Route path="/estudantes" element={<EstudantesPage />} />
          <Route path="/contador" element={<ContadorPage />} />
          <Route path="/pokemons" element={<PokemonPage />} />
          <Route path="/endereco" element={<EnderecoPage />} />
          <Route path="/sobre">
            <Route index element={<SobrePage />} />
            <Route path="mim" element={<SobrePage />} />
            <Route path="preta-lab" element={<SobrePretaLabPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <div/>

      <Rodape mensagem="Feito por Row <3" />
    </>
  );
};

export default App;