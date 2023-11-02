import { useState } from 'react'
import PersonalForm from './components/PersonalForm ';
import AddressForm from './components/AddressForm';
import ProfessionalForm from './components/ProfessionalForm';
import './App.css'
import { FormStateType } from './types';
/* import { FormStateType } from './types'; */

function App() {
  const INICIAL_STATE = {
    name: '',
    email: '',
    cpf: 0,
    address: '',
    city: '',
    state: '', //DÚVIDA
    residence: 'Casa',
    curriculum: '',
    office: '',
    jobDescription: '',
  } as FormStateType

  const [formValues, setFormValues] = useState(INICIAL_STATE);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return (
    <form >
      <PersonalForm handleChange={handleChange} formValues={formValues} />
      <AddressForm />
      <ProfessionalForm formValues={formValues} />
    </form>
  )
}

export default App
