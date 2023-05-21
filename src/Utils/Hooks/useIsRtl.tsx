import {useAppSelector} from "~/src/Utils/Hooks/index";



const useIsRtl = ():boolean => {
    const direction = useAppSelector((state)=>state.layout.direction)
    return direction === 'rtl'
}

export default useIsRtl