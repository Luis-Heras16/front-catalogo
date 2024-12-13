export interface Empresa {
  _id: string;
  id: string;
  nombre: string;
  descripcion: string;
  vacantes: Vacante[];
  contacto: Contacto;
  logo: string;
  beneficios: string[];
}

export interface Contacto {
  telefono: string;
  emails: string[];
  _id: string;
}

export default interface Vacante {
  _id: string;
  titulo: string;
  descripcion: string;
  requisitos: string[];
}
