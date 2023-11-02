import { FormStateType } from "../types";

type PersonalFormProp = {
  formValues: FormStateType,
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void,
}

function PersonalForm({ formValues, handleChange }: PersonalFormProp) {
  const { name, email, cpf } = formValues;
  return (
    <fieldset>
      <legend>Dados Pessoais</legend>
      <div className="container-name">
        <label htmlFor="nome"> Nome:
          <input type="text"
            required
            id="nome-input"
            name="name"
            value={name}
            onChange={(event) => handleChange(event)}
            maxLength={40} />
        </label>
      </div>
      <div className="container-email">
        <label htmlFor="email">Email:
          <input type="text"
            name="email"
            id="email-input"
            value={email}
            maxLength={50}
            required />
        </label>
      </div>
      <div className="container-cpf">
        <label htmlFor="cpf">CPF:
          <input type="text"
            name="cpf"
            id="cpf-input"
            value={cpf}
            maxLength={11}
            required />
        </label>
      </div>
    </fieldset>
  )
}

export default PersonalForm;