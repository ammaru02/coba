import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const anggotas: QueryResolvers['anggotas'] = () => {
  return db.anggota.findMany()
}

export const anggota: QueryResolvers['anggota'] = ({ id }) => {
  return db.anggota.findUnique({
    where: { id },
  })
}

export const createAnggota: MutationResolvers['createAnggota'] = ({
  input,
}) => {
  return db.anggota.create({
    data: input,
  })
}

export const updateAnggota: MutationResolvers['updateAnggota'] = ({
  id,
  input,
}) => {
  return db.anggota.update({
    data: input,
    where: { id },
  })
}

export const deleteAnggota: MutationResolvers['deleteAnggota'] = ({ id }) => {
  return db.anggota.delete({
    where: { id },
  })
}
