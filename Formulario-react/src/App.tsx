import { useState } from 'react';
import PersonalForm from './components/PersonalForm ';
import AddressForm from './components/AddressForm';
import ProfessionalForm from './components/ProfessionalForm';
import DataSubmit from './components/DataSubmit';
import './App.css'

function App() {
  const INICIAL_STATE = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    residence: '',
    curriculum: '',
    office: '',
    roleDescription: '',
  }

  const [formValues, setFormValues] = useState(INICIAL_STATE);
  const [mouseEnter, setMouseEnter] = useState
    (false);
  const [submitData, setSubmitData] = useState({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    let { name, value } = event.target;
    if (name === 'name') {
      value = value.toUpperCase();
    }
    if (name === 'address') {
      value = value.replace(/[^\w\s]/g, '');

    }
    setFormValues({
      ...formValues,
      [name]: value,
    })
    console.log('setformValues', setFormValues);

  }// Função genérica para atualizar os valores dos inputs


  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const verifyNumber = /^\d/.test(value);
    if (name === 'city' && verifyNumber) {

      setFormValues((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    }
  }

  function handleMouseEnter() {
    if (!mouseEnter) {
      setMouseEnter(true);
      alert('Preencha com cuidado esta informação!') //Para o alert aparecer apenas uma vez
    }
  }


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitData(formValues);
  }

  function resetForm() {
    setFormValues(INICIAL_STATE);
  }

  return (
    <form onSubmit={handleSubmit}>
      <PersonalForm onChange={handleChange} formValues={formValues} />
      <AddressForm onChange={handleChange} formValues={formValues} onBlur={handleBlur} />
      <ProfessionalForm onChange={handleChange} formValues={formValues} onMouseEnter={handleMouseEnter} mouseEnter={mouseEnter} />
      <button type="submit" >Enviar</button>{
        submitData && <DataSubmit formValues={formValues} />
      }
      <button type="reset" onClick={() => resetForm()}>Limpar</button>
    </form >
  )
}

export default App
