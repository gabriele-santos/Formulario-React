import { FormStateType } from "../types";

type ProfessionalFormProp = {
  formValues: FormStateType
}

function ProfessionalForm({ formValues }: ProfessionalFormProp) {
  const { curriculum, office, jobDescription
  } = formValues;
  return (
    <fieldset>
      <legend>Dados Profissionais</legend>
      <div className="curriculum">
        <p>Resumo do Currículo:</p>
        <textarea name="curriculum"
          id="curriculum-textarea"
          value={curriculum}
          maxLength={1000}
          required></textarea>
      </div>
      <div className="office-container">
        <label htmlFor="office">
          Cargo:
          <input type="text"
            name="office"
            id="office-input"
            value={office}
            maxLength={40}
            required />
        </label>
      </div>
      <div className="job-description">
        <p>Descrição do Cargo:</p>
        <textarea name="job-description"
          id="job-description-textarea"
          value={jobDescription}
          maxLength={500}
          required></textarea>
      </div>
    </fieldset>
  )
}

export default ProfessionalForm;