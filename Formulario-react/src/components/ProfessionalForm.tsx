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
        <p className="p-professional">Resumo do Currículo:</p>
      <div className="curriculum form-floating ">
        <textarea name="curriculum"
          id="floatingTextarea"
          className=" form-control"
          value={curriculum}
          onChange={onChange}
          maxLength={1000}
          placeholder="Leave a comment here"
          required />
          <label className="label-textarea" htmlFor="floatingTextarea">Resuma</label>
      </div>
      <div className="office-container">
        <label htmlFor="office">
          Cargo:
          <input type="text"
            name="office"
            id="office-input"
            className="form-control"
            value={office}
            onChange={onChange}
            onMouseEnter={onMouseEnter}
            maxLength={40}
            required
          // onMouseEnter
          />
        </label>
      </div>
      <p className="p-professional"> Descrição do cargo:</p>
      <div className="form-floating">
      <textarea
        name="roleDescription"
        id="floatingTextarea2"
        className="form-control"
        maxLength={500}
        placeholder="Leave a comment here"
        required
        value={roleDescription}
        onChange={onChange}
      />
      <label className="label-textarea" htmlFor="floatingTextarea2">Descreva</label>
      </div>
    </fieldset >
  )
}

export default ProfessionalForm;