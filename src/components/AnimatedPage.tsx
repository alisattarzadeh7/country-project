import React, {ReactNode} from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 1.2,
    },
    in: {
        opacity: 1,
        scale: 1,
    },
    out: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: 0.5,
        },
    },
};

interface IAnimatedPageProps{
    children:ReactNode
}

const AnimatedPage:React.FC<IAnimatedPageProps> = ({ children,...props }) =>{
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            {...props}
        >
            { children }
        </motion.div>
    );
}

export default AnimatedPage;