import donations from '../constants/donations'

const mockAPI = {
  getDonations: async () => {
    return donations
  },
}

export default mockAPI
