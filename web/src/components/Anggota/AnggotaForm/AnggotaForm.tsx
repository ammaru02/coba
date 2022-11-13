import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'

import type { EditAnggotaById, UpdateAnggotaInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'




type FormAnggota = NonNullable<EditAnggotaById['anggota']>

interface AnggotaFormProps {
  anggota?: EditAnggotaById['anggota']
  onSave: (data: UpdateAnggotaInput, id?: FormAnggota['id']) => void
  error: RWGqlError
  loading: boolean
}

const AnggotaForm = (props: AnggotaFormProps) => {
  const onSubmit = (data: FormAnggota) => {













    props.onSave(data, props?.anggota?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAnggota> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="noReg"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          No reg
        </Label>

        <NumberField
          name="noReg"
          defaultValue={props.anggota?.noReg}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />


        <FieldError name="noReg" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.anggota?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />


        <FieldError name="name" className="rw-field-error" />

        <Label
          name="jk"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Jk
        </Label>

        <SelectField
          name="jk"
          defaultValue={props.anggota?.jk}
          validation={{
            required: true,
            validate: {
              matchesInitialValue: (value) => {
                return (
                  value !== 'Please select an option' ||
                  'Select an Option'
                )
              },
            },
          }}
        >
          <option>laki-laki</option>
          <option>perempuan</option>
        </SelectField>


        <FieldError name="jk" className="rw-field-error" />

        <Label
          name="alamat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Alamat
        </Label>

        <TextField
          name="alamat"
          defaultValue={props.anggota?.alamat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />


        <FieldError name="alamat" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AnggotaForm
