import axios from "axios"

const URL = 'http://localhost:8000'

export const getAllLines = () => axios.get(`${URL}/all-lines`)

export const getLinesByCategory = async (selectedCategory) => {
    return await axios.get(`${URL}/category/${selectedCategory}`)
}