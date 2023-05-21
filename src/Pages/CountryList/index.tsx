import React, {useEffect, useRef, useState} from "react";
import {useAllCountries} from "~/src/Utils/Queries/CountryQueries.ts";
import CountryCard from "~/src/Pages/CountryList/CountryCard.tsx";
import {Grid} from "@mui/material";
import {AnimatePresence, motion, useInView} from "framer-motion"
import qs from "qs"
import Country from "~/src/Entities/Country.ts";
import {Link} from "react-router-dom";

const animationVariant = {
    hidden:{
        opacity:0,
        x:100
    },
    show:{
        opacity:1,
        x:0
    },
    exit:{
        opacity:0,
        x:100
    },

}
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren:0.1,
        }
    }
}
const CountryList:React.FC = ()=>{
    const [countries,setCountries] = useState<Country[]>([])

    const {data} = useAllCountries(qs.stringify({fields:'name,flags,cca2'}),{
        onSuccess:(d)=>setCountries(d.slice(0,12))
    })
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(()=>{
        if(isInView && data && countries.length !== data.length)
            setCountries(prevState => [...prevState,...data.slice(prevState.length ,prevState.length + 12)])
    },[isInView])

    useEffect(()=>{
        return ()=>{
            if(data)
            setCountries(data.slice(0,12))
        }
    },[data])


    return (
       <>
           {
               countries.length > 0 && <motion.div variants={container}
                                       initial="hidden"
                                       animate="show"

               >

                       <Grid container spacing={4}>

                           {
                               countries?.map((country,index)=>(
                                   <Grid xs={12} md={4} lg={3} item>
                                        <Link to={`/country/${country.cca2}`}>
                                            <motion.div
                                                exit={{  opacity:0,
                                                    x:100 }}
                                                key={country.name.official} variants={animationVariant}
                                            >

                                                <CountryCard info={country} />
                                            </motion.div>
                                        </Link>
                                   </Grid>
                               ))
                           }


                       </Grid>

               </motion.div>
           }
           <div ref={ref} />
       </>
    )
}


export default CountryList