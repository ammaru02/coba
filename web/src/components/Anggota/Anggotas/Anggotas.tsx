import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Anggota/AnggotasCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteAnggotaMutationVariables, FindAnggotas } from 'types/graphql'

const DELETE_ANGGOTA_MUTATION = gql`
  mutation DeleteAnggotaMutation($id: Int!) {
    deleteAnggota(id: $id) {
      id
    }
  }
`

const AnggotasList = ({ anggotas }: FindAnggotas) => {
  const [deleteAnggota] = useMutation(DELETE_ANGGOTA_MUTATION, {
    onCompleted: () => {
      toast.success('Anggota deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAnggotaMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete anggota ' + id + '?')) {
      deleteAnggota({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>No reg</th>
            <th>Name</th>
            <th>Jk</th>
            <th>Alamat</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {anggotas.map((anggota) => (
            <tr key={anggota.id}>
              <td>{truncate(anggota.id)}</td>
              <td>{truncate(anggota.noReg)}</td>
              <td>{truncate(anggota.name)}</td>
              <td>{truncate(anggota.jk)}</td>
              <td>{truncate(anggota.alamat)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.anggota({ id: anggota.id })}
                    title={'Show anggota ' + anggota.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAnggota({ id: anggota.id })}
                    title={'Edit anggota ' + anggota.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete anggota ' + anggota.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(anggota.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AnggotasList
