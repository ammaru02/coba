export const schema = gql`
  type Anggota {
    id: Int!
    noReg: Int!
    name: String!
    jk: String!
    alamat: String!
  }

  type Query {
    anggotas: [Anggota!]! @requireAuth
    anggota(id: Int!): Anggota @requireAuth
  }

  input CreateAnggotaInput {
    noReg: Int!
    name: String!
    jk: String!
    alamat: String!
  }

  input UpdateAnggotaInput {
    noReg: Int
    name: String
    jk: String
    alamat: String
  }

  type Mutation {
    createAnggota(input: CreateAnggotaInput!): Anggota! @requireAuth
    updateAnggota(id: Int!, input: UpdateAnggotaInput!): Anggota! @requireAuth
    deleteAnggota(id: Int!): Anggota! @requireAuth
  }
`
