import { FormStateType } from "../types";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

type PersonalFormProp = {
  formValues: FormStateType,
  onChange: React.ChangeEventHandler,
}


function PersonalForm({ formValues, onChange }: PersonalFormProp) {
  const { name, email, cpf } = formValues;

  return (
    <fieldset>
      <legend>Dados Pessoais</legend>
      <div className="container-name">
        <label htmlFor="nome">
          Nome:
          <input type="text"
            required
            id="nome-input"
            className="form-control"
            name="name"
            value={name}
            onChange={onChange}
            maxLength={40} />
        </label>
      </div>
      <div className="container-email">
        <label htmlFor="email">Email:
          <input type="text"
            name="email"
            id="email-input"
            className="form-control"
            value={email}
            onChange={onChange}
            maxLength={50}
            required />
        </label>
      </div>
      <div className="container-cpf">
        <label htmlFor="cpf">CPF:
          <input type="text"
            name="cpf"
            id="cpf-input"
            className="form-control"
            value={cpf}
            onChange={onChange}
            maxLength={11}
            required />
        </label>
      </div>
    </fieldset>
  )
}

export default PersonalForm;