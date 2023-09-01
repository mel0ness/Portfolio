import "../../Style/Pages/Contact/contact.scss"
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import { useState } from "react"
import { useNavigate} from "react-router-dom"
import { routeVariants } from "../../Features/routeVariants";
import { motion } from "framer-motion"

const Contact = () => {



    const [sent, updateSent] = useState(false);
    const [sentFailed, updateSentFailed] = useState(false);
    const form = useRef();
    const navigate = useNavigate();

const Validation = () => {
    if(sent) {
        updateSent(false);
        navigate("../")
    }
    if(sentFailed) {
        updateSentFailed(false);
        navigate("../")
    }
}

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3q7e9vj', 'template_jbu21qs', form.current, '8vO3rVD9byI-nkoFD')
          .then((result) => {
              console.log(result.text);
              updateSent(true);

          }, (error) => {
              console.log(error.text);
              updateSentFailed(true);
          });
        updateSent(true);
      };

return(
    <motion.div variants={routeVariants} initial="initial" animate="final" exit="exit" key="Contact">
        {sent? <div className="modaleCheckContact">
            <div className="messageCheckContact">Votre message a bien été envoyé</div>
            <div onClick={() => Validation()} className="buttonCheckContact">Merci</div>
        </div> : <div>  
            </div>}
            {sentFailed? <div className="modaleCheckContact">
            <div className="messageCheckContact">Une erreur s&apos;est produite, veuillez réessayer plus tard.</div>
            <div onClick={() => Validation()} className="buttonCheckContact">Compris</div>
        </div> : <div>
            </div>}
        <form className="formContact" ref={form} onSubmit={sendEmail}>
      <div className="ligneForm"><label>Nom :</label>
      <input type="text" name="user_name" required/></div>
      <div className="ligneForm"><label>Email :</label>
      <input type="email" name="user_email" required/></div>
      <div className="ligneForm"><label>Objet :</label>
      <input type="text" name="user_object" required /></div>
      <div className="ligneFormMsg"><label>Message :</label>
      <textarea name="message" required minLength={15} /></div>
      <input type="submit" value="Envoyer" />
    </form>

    </motion.div>
)
}

export default Contact;