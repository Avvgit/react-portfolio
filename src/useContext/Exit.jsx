import { FiGithub } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io5"
import "./exit.css"


export const Exit = () => {
  return (
    <>
      <div className='footer__light'>Desarrolador : </div>
          <div className='footer__fluor'>➪ Alejandro V.V.</div>
          <br />

          <div className="footer__socials">
            <a href="https://github.com/Avvgit" target='_blank'><FiGithub /></a>
            <a href="https://twitter.com/A_VerVal" target='_blank'><IoLogoTwitter /></a>
            <p>Gracias por tu visita !</p>
          </div>

          <div className="footer__copyright">
            <medium>&copy; El arte desafía a la tecnología y la tecnología inspira al arte.</medium>
          </div>
    </>
  )
}
