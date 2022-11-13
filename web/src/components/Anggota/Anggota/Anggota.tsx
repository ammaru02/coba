
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteAnggotaMutationVariables, FindAnggotaById } from 'types/graphql'

const DELETE_ANGGOTA_MUTATION = gql`
  mutation DeleteAnggotaMutation($id: Int!) {
    deleteAnggota(id: $id) {
      id
    }
  }
`

interface Props {
  anggota: NonNullable<FindAnggotaById['anggota']>
}

const Anggota = ({ anggota }: Props) => {
  const [deleteAnggota] = useMutation(DELETE_ANGGOTA_MUTATION, {
    onCompleted: () => {
      toast.success('Anggota deleted')
      navigate(routes.anggotas())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAnggotaMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete anggota ' + id + '?')) {
      deleteAnggota({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Anggota {anggota.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{anggota.id}</td>
            </tr><tr>
              <th>No reg</th>
              <td>{anggota.noReg}</td>
            </tr><tr>
              <th>Name</th>
              <td>{anggota.name}</td>
            </tr><tr>
              <th>Jk</th>
              <td>{anggota.jk}</td>
            </tr><tr>
              <th>Alamat</th>
              <td>{anggota.alamat}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAnggota({ id: anggota.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(anggota.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Anggota
