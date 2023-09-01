import Warning from "../../assets/error.svg"
import "../../Style/Pages/Error/error.scss"
import { motion } from "framer-motion"
import { routeVariants } from "../../Features/routeVariants"

const Error = () => {
    return (
        <motion.div variants={routeVariants} initial="initial" animate="final" exit="exit" key="Error">
            <img src={Warning} alt="Error" className="warning" />
            <h2>Cette page n&apos;existe pas!</h2>
        </motion.div>
    )
}

export default Error