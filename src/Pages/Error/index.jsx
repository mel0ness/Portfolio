import Warning from "../../assets/error.svg"
import DarkWarning from "../../assets/warning-dark.svg"
import "../../Style/Pages/Error/error.scss"
import { motion } from "framer-motion"
import { routeVariants } from "../../Features/routeVariants"
import {currentTheme} from "../../Features/selector"
import { useSelector } from "react-redux"

const Error = () => {

    const colors = useSelector(currentTheme)
    return (
        <motion.div variants={routeVariants} initial="initial" animate="final" exit="exit" key="Error" className={"error "+colors}>
            {colors === "Dark"? <img src={DarkWarning} alt="Error" className="warning" /> : <img src={Warning} alt="Error" className="warning" />}
            <h2>Cette page n&apos;existe pas!</h2>
        </motion.div>
    )
}

export default Error