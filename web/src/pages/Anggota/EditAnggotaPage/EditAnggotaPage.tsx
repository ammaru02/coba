import EditAnggotaCell from 'src/components/Anggota/EditAnggotaCell'

type AnggotaPageProps = {
  id: number
}

const EditAnggotaPage = ({ id }: AnggotaPageProps) => {
  return <EditAnggotaCell id={id} />
}

export default EditAnggotaPage
