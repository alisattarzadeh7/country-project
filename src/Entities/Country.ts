export default class Country{
    "flags": {
        "png": string,
        "svg": string,
        "alt": string
    }
    "name": {
        "common": string,
        "official": string,
        "nativeName": {
            "ara": {
                "official": string,
                "common": string
            }
        }
    }
    "cca2":string


    static create(params:any){
        const country = new Country()
        country.flags = params?.flags
        country.name = params?.name
        country.cca2 = params?.cca2
        return country
    }

}