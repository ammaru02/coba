import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AnggotaForm from 'src/components/Anggota/AnggotaForm'

import type { CreateAnggotaInput } from 'types/graphql'

const CREATE_ANGGOTA_MUTATION = gql`
  mutation CreateAnggotaMutation($input: CreateAnggotaInput!) {
    createAnggota(input: $input) {
      id
    }
  }
`

const NewAnggota = () => {
  const [createAnggota, { loading, error }] = useMutation(
    CREATE_ANGGOTA_MUTATION,
    {
      onCompleted: () => {
        toast.success('Anggota created')
        navigate(routes.anggotas())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAnggotaInput) => {
    createAnggota({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Anggota</h2>
      </header>
      <div className="rw-segment-main">
        <AnggotaForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAnggota
