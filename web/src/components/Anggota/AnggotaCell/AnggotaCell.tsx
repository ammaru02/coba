import type { FindAnggotaById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Anggota from 'src/components/Anggota/Anggota'

export const QUERY = gql`
  query FindAnggotaById($id: Int!) {
    anggota: anggota(id: $id) {
      id
      noReg
      name
      jk
      alamat
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Anggota not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ anggota }: CellSuccessProps<FindAnggotaById>) => {
  return <Anggota anggota={anggota} />
}
