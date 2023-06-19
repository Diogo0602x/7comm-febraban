interface Donation {
  id: number
  name: string
  amount: number
  timestamp: number
  transactionId: string
}

const donations: Donation[] = [
  {
    id: 1,
    name: 'João',
    amount: 50.0,
    timestamp: 1624042055,
    transactionId: '0x7f1ab89cd3f4',
  },
  {
    id: 2,
    name: 'Maria',
    amount: 100.0,
    timestamp: 1624031987,
    transactionId: '0x2b5cd8a46ef1',
  },
  {
    id: 3,
    name: 'Pedro',
    amount: 25.0,
    timestamp: 1624020912,
    transactionId: '0x8de5f26c37a9',
  },
  {
    id: 4,
    name: 'Ana',
    amount: 75.0,
    timestamp: 1624009843,
    transactionId: '0x6a9fb53e8cd2',
  },
  {
    id: 5,
    name: 'Carlos',
    amount: 200.0,
    timestamp: 1623998779,
    transactionId: '0x4d9e4c1a72b6',
  },
  {
    id: 6,
    name: 'Mariana',
    amount: 150.0,
    timestamp: 1623987716,
    transactionId: '0x1f82e967bdcf',
  },
  {
    id: 7,
    name: 'Lucas',
    amount: 30.0,
    timestamp: 1623976649,
    transactionId: '0x9a3b68f42e17',
  },
  {
    id: 8,
    name: 'Laura',
    amount: 80.0,
    timestamp: 1623965587,
    transactionId: '0x5e7daa7c9048',
  },
  {
    id: 9,
    name: 'Gabriel',
    amount: 60.0,
    timestamp: 1623954519,
    transactionId: '0x3c79baf3d215',
  },
  {
    id: 10,
    name: 'Isabela',
    amount: 120.0,
    timestamp: 1623943452,
    transactionId: '0x0b27e84065c7',
  },
]

export default donations
