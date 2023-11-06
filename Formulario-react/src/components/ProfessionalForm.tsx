import { FormStateType } from "../types";

type ProfessionalFormProp = {
  formValues: FormStateType,
  onChange: React.ChangeEventHandler,
  onMouseEnter: React.MouseEventHandler<HTMLInputElement>,
  mouseEnter: boolean,
}

function ProfessionalForm({ formValues, onChange, onMouseEnter }: ProfessionalFormProp) {
  const { curriculum, office, roleDescription } = formValues;
  return (
    <fieldset>
      <legend>Dados Profissionais</legend>
      <div className="curriculum">
        <p>Resumo do Currículo:</p>
        <textarea name="curriculum"
          id="curriculum-textarea"
          value={curriculum}
          onChange={onChange}
          maxLength={1000}
          required />
      </div>
      <div className="office-container">
        <label htmlFor="office">
          Cargo:
          <input type="text"
            name="office"
            id="office-input"
            value={office}
            onChange={onChange}
            onMouseEnter={onMouseEnter}
            maxLength={40}
            required
          // onMouseEnter
          />
        </label>
      </div>
      <p> Descrição do cargo:</p>
      <textarea
        name="roleDescription"
        id="roleDescription"
        maxLength={500}
        required
        value={roleDescription}
        onChange={onChange}
      />
    </fieldset >
  )
}

export default ProfessionalForm;