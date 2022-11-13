import type { Prisma, Anggota } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnggotaCreateArgs>({
  anggota: {
    one: {
      data: { noReg: 8204820, name: 'String', jk: 'String', alamat: 'String' },
    },
    two: {
      data: { noReg: 6474650, name: 'String', jk: 'String', alamat: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<Anggota, 'anggota'>
