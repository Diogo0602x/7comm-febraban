import axios from 'axios'

const baseURL = 'http://host.docker.internal:3000/api'

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Basic ${btoa(
      `${import.meta.env.VITE_APP_CLIENT_ID}:${
        import.meta.env.VITE_APP_CLIENT_SECRET
      }`,
    )}`,
  },
})

export const getAllDonations = async () => {
  try {
    const response = await api.get('/getalldonations')
    return response.data
  } catch (error) {
    console.error('Error fetching all donations:', error)
    throw error
  }
}

export const getDonationCount = async () => {
  try {
    const response = await api.get('/getdonationcount')
    return response.data
  } catch (error) {
    console.error('Error fetching donation count:', error)
    throw error
  }
}

export const getDonationByName = async (name: string) => {
  try {
    const response = await api.get(`/getdonation?name=${name}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching donation by name '${name}':`, error)
    throw error
  }
}
