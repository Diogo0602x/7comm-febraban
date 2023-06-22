// api/realApi.tsx:

import axios from 'axios'

const donationsApi = {
  getDonations: async () => {
    try {
      const response = await axios.get(
        'http://localhost:3000/api/getdonationcount',
      )
      return response.data && console.log(response.data)
    } catch (error) {
      console.error('Failed to fetch donations', error)
      return []
    }
  },
}

export default donationsApi
