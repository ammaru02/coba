import type { FindAnggotas } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Anggotas from 'src/components/Anggota/Anggotas'

export const QUERY = gql`
  query FindAnggotas {
    anggotas {
      id
      noReg
      name
      jk
      alamat
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No anggotas yet. '}
      <Link
        to={routes.newAnggota()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ anggotas }: CellSuccessProps<FindAnggotas>) => {
  return <Anggotas anggotas={anggotas} />
}
