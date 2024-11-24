import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then((res) => res.data)
}

const addPerson = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then((res) => res.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((res) => res.data)
}

const updatePerson = (updatedPerson, id) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    return request.then((res) => res.data)
}

export default { getAllPersons, addPerson, deletePerson, updatePerson }