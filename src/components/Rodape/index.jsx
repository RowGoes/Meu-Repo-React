import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.css";

const Rodape = ({ mensagem }) => {
   
    return (
        <footer>
            <p>{mensagem}</p>
            <br/>
            
            <ol id="contato">
                
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="malito:roana.goes@gmail.com" target="_blank">      roana.goes@gmail.com </a> <br/><br/>
                
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/r%C3%B4ana-g%C3%B3es-679901206/" target="_blank">      Rôana Góes</a> <br/><br/>
                        
                    <FontAwesomeIcon icon={faInstagram} />
                    <a href="https://www.instagram.com/rowgoes/" target="_blank">      rowgoes</a>  <br/><br/>
                
                
            </ol>
        </footer>
    );
};

export default Rodape;