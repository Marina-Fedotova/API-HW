import axios from "axios";

let URL = 'https://apichallenges.herokuapp.com/';

export class ToDosService {
    constructor (options){this.options = options;}
    
    async get(headers){const response = await axios.get(`${URL}todos`, {headers: headers});return response;}
    
    async head(headers){const response = await axios.head(`${URL}todos`, {headers: headers});return response;}

    async post(headers){const response = await axios.post(`${URL}todos`, {headers: headers});return response;}

    async delete(headers){const response = await axios.post(`${URL}todos`, {headers: headers});return response;}
}