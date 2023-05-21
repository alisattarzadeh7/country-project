import { useQuery, UseQueryResult} from "react-query";
import Country from "~/src/Entities/Country.ts";
import CountryController from "~/src/Controllers/CountryController.ts";
import {AppQueryOptions} from "~/src/Utils/Types/global";

export const useAllCountries = (params?:string,queryOptions?:AppQueryOptions): UseQueryResult<Country[]> =>{
    return useQuery('all-countries', ()=>CountryController.getAllCountries(params),queryOptions)
}



