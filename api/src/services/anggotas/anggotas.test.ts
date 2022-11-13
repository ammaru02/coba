import type { Anggota } from '@prisma/client'

import {
  anggotas,
  anggota,
  createAnggota,
  updateAnggota,
  deleteAnggota,
} from './anggotas'
import type { StandardScenario } from './anggotas.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('anggotas', () => {
  scenario('returns all anggotas', async (scenario: StandardScenario) => {
    const result = await anggotas()

    expect(result.length).toEqual(Object.keys(scenario.anggota).length)
  })

  scenario('returns a single anggota', async (scenario: StandardScenario) => {
    const result = await anggota({ id: scenario.anggota.one.id })

    expect(result).toEqual(scenario.anggota.one)
  })

  scenario('creates a anggota', async () => {
    const result = await createAnggota({
      input: { noReg: 1304826, name: 'String', jk: 'String', alamat: 'String' },
    })

    expect(result.noReg).toEqual(1304826)
    expect(result.name).toEqual('String')
    expect(result.jk).toEqual('String')
    expect(result.alamat).toEqual('String')
  })

  scenario('updates a anggota', async (scenario: StandardScenario) => {
    const original = (await anggota({ id: scenario.anggota.one.id })) as Anggota
    const result = await updateAnggota({
      id: original.id,
      input: { noReg: 5732579 },
    })

    expect(result.noReg).toEqual(5732579)
  })

  scenario('deletes a anggota', async (scenario: StandardScenario) => {
    const original = (await deleteAnggota({
      id: scenario.anggota.one.id,
    })) as Anggota
    const result = await anggota({ id: original.id })

    expect(result).toEqual(null)
  })
})
