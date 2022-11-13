import type { EditAnggotaById, UpdateAnggotaInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnggotaForm from 'src/components/Anggota/AnggotaForm'

export const QUERY = gql`
  query EditAnggotaById($id: Int!) {
    anggota: anggota(id: $id) {
      id
      noReg
      name
      jk
      alamat
    }
  }
`
const UPDATE_ANGGOTA_MUTATION = gql`
  mutation UpdateAnggotaMutation($id: Int!, $input: UpdateAnggotaInput!) {
    updateAnggota(id: $id, input: $input) {
      id
      noReg
      name
      jk
      alamat
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ anggota }: CellSuccessProps<EditAnggotaById>) => {
  const [updateAnggota, { loading, error }] = useMutation(
    UPDATE_ANGGOTA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Anggota updated')
        navigate(routes.anggotas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAnggotaInput,
    id: EditAnggotaById['anggota']['id']
  ) => {
    updateAnggota({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Anggota {anggota?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AnggotaForm anggota={anggota} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
