import Country from "~/src/Entities/Country.ts";
import Http from "~/src/Utils/Facades/Request.ts";

export default class CountryController extends Country{
    static async  getAllCountries(params?:string):Promise<Country[]>{
       const res = await Http.get(`/all?${params}`)
       return  res.data.map((c:Country)=>Country.create(c))
    }
}