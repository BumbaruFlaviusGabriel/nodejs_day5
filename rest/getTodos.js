import axios from "axios";

export default async function getTodos(req,res){
    let body;
    const url = 'http://localhost:8081/v1/query'
    const dataTodos = `query{
        todos{
        id
    }}`

    const gqlQueryTodos = {"query": dataTodos}
    const response = await axios.post(url,gqlQueryTodos)
    body = response.data
    console.log(body)
    res.json(body)
}