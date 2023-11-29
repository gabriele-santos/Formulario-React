import { FormStateType } from "../types";
import states from "../arrayEstados";

type AdressFormProp = {
  formValues: FormStateType,
  onChange: React.ChangeEventHandler,
  onBlur: React.FocusEventHandler,
}

function AddressForm({ formValues, onChange, onBlur }: AdressFormProp) {
  const { address, city, state, residence } = formValues;
  return (
    <fieldset>
      <legend>Dados do endereço</legend>
      <div className="container-adress">
        <label htmlFor="adress">Endereço:
          <input type="text"
            maxLength={200}
            required
            name="address"
            value={address}
            id="adress-input"
            className="form-control"
            onChange={onChange}

          />
        </label>
      </div>
      <div className="container-city">
        <label htmlFor="city">Cidade:
          <input type="text"
            required
            id="city-input"
            className="form-control"
            name="city"
            value={city}
            maxLength={28}
            onChange={onChange}
            onBlur={onBlur} />
        </label>
      </div>
      <div className="container-state"></div>
      <label htmlFor="">Estado:
        <select name="state"
          id="state-select"
          className="form-select"
          onChange={onChange}>
          <option id="select-states" value={state}>Selecione</option>
          {
            states.map((stateList) => (
              <option key={stateList.nome} value={stateList.nome}>{stateList.uf}</option>
            ))
          }
        </select>
      </label>
      <div>
        <p className="p-residence">Tipo de Residência:
          <label htmlFor="residence1">Casa
            <input type="radio"
              name="residence"
              id="house-input"
              className="form-check-input"
              value={residence}
              onChange={onChange}
              /* checked={residence === 'Casa'}  */ /> {/* para atualizar o estado e ele ja inicia selecionado pois o valor inicial é 'casa' */}
          </label>
          <label htmlFor="residence2">Apartamento
            <input type="radio"
              name="residence"
              id="apart-input"
              className="form-check-input"
              value={residence}
              onChange={onChange}
              /* checked={residence === 'Apartamento'}  */ />
          </label>
        </p>
      </div>
    </fieldset>
  )
}

export default AddressForm;