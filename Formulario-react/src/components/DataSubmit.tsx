import { FormStateType } from "../types";

type data = {
  formValues: FormStateType,
}

function DataSubmit({ formValues }: data) {
  const { name, email, cpf, address, city, state, residence, curriculum, office, roleDescription
  } = formValues;
  return (
    <>
    <h3 id="values-submit">Valores preenchidos no formulário:</h3>
      <div className="personal-data">
      <p>Dados Pessoais</p>
      <div>
        Nome: {name}
      </div>
      <div>
        Email: {email}
      </div>
      <div>
        CPF: {cpf}
      </div>
      <div>
        Endereço: {address}
      </div>
      <div>
        Cidade: {city}
      </div>
      <div>
        Estado: {state}
      </div>
      <div>
        Residência: {residence}
      </div>
      <p>Dados profissionais</p>
      <div>
        Resumo do currículo: {curriculum}
      </div>
      <div>
        Cargo: {office}
      </div>
      <div>
        Descrição do cargo: {roleDescription}
      </div>
      </div>
      </>
  )
}


export default DataSubmit;