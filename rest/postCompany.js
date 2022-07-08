import axios from "axios";

export default async function postCompany(req,res){
    let body;
    let name = req.mutation.name
    let age = req.mutation.age
    let name_empl = req.mutation.name_empl
    let gender = req.mutation.gender
    let long = req.mutation.long
    let lat  = req.mutation.lat
    let city = req.mutation.city
    let city_loc = req.mutation.city_loc
    let long_lat = req.mutation.long_lat
    let lat_loc = req.mutation.lat_loc

    const url = 'http://localhost:8081/v1/query'
    const dataCompanyMutation = `mutation($name:String!,$age:Int!,$name_empl:String!,
        $gender:String!,$long:Int!,$lat:Int!,$city:String!,
    $city_loc:String!,$long_loc:Int!,$lat_loc:Int!){
        company(input:{
            name: $name
            Employees:{
                age:$age
                name:$name_empl
                gender:$gender
                location:{
                    longitude:$long
                    latitude:$lat
                    city:$city
                }
            }
            location:{
                city:$city_loc
                longitude:$long_loc
                latitude:$lat_loc
            }
    }){
        name
            id
    }
    }`

    const vars={"name":name,"age":age,"name_empl":name_empl,"gender":gender,
                "long":long, "lat":lat,"city":city,"city_loc":city_loc,
                "long_lat":long_lat, "lat_loc":lat_loc}
    const gqlQuery = {"mutation": dataCompanyMutation,"variables":vars}
    const response = await axios.post(url,gqlQuery)
    body = response.data
    console.log(body)
    res.json(body)
}