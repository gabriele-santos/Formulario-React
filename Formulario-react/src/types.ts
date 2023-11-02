/* import states from "./arrayEstados"; */

export type FormStateType = {
    name: string,
    email: string,
    cpf: number, //DÚVIDA
    address: string,
    city: string,
    state: string, //DÚVIDA
    residence: 'Casa' | 'Apartamento',
    curriculum: string,
    office: string,
    jobDescription: string,

}