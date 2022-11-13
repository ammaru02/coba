import AnggotaCell from 'src/components/Anggota/AnggotaCell'

type AnggotaPageProps = {
  id: number
}

const AnggotaPage = ({ id }: AnggotaPageProps) => {
  return <AnggotaCell id={id} />
}

export default AnggotaPage
