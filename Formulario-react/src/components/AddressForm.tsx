function AddressForm() {
  return (
    <fieldset>
      <legend>Dados do endereço</legend>
      <div className="container-adress">
        <label htmlFor="adress">Endereço:
          <input type="text"
            maxLength={200}
            required
            name="adress"
            id="adress-input" />
        </label>
      </div>
      <div className="container-city">
        <label htmlFor="city">Cidade:
          <input type="text"
            required
            id="city-input"
            name="city"
            maxLength={28} />
        </label>
      </div>
      <div className="container-state"></div>
      <label htmlFor="">Estado
        <select name="state"
          id="state-select">
          <option value="states">PB</option>
        </select>
      </label>
      <div>
        <p>Tipo de Residência:
          <label htmlFor="residence1">Casa
            <input type="radio"
              name="residence"
              id="house-input" />
          </label>
          <label htmlFor="residence2">Apartamento
            <input type="radio"
              name="residence"
              id="apart-input" />
          </label>
        </p>
      </div>
    </fieldset>
  )
}

export default AddressForm;