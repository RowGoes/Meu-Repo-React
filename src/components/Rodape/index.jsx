import { faEnvelopeSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.css";

const Rodape = ({ mensagem }) => {
   
    return (
        <footer>
            <p>{mensagem}</p>
            <br/>
            
            <ol id="contato">
                
                <li>
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                    <a href="malito:roana.goes@gmail.com" target="_blank">roana.goes@gmail.com </a> <br/><br/>
                </li>
                
                <li>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="https://www.linkedin.com/in/r%C3%B4ana-g%C3%B3es-679901206/" target="_blank">Rôana Góes</a> <br/><br/>
                </li>
                
                <li>
                    <FontAwesomeIcon icon={faInstagram} />    
                    <a href="https://www.instagram.com/rowgoes/" target="_blank">rowgoes</a>  <br/><br/>
                </li>
                
            </ol>
        </footer>
    );
};

export default Rodape;

