import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService } from '@app/core/api.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { Empresa } from '@app/core/types/vacante.interface';

@Component({
  selector: 'app-formulario-empresa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './formulario-empresa.component.html',
  styleUrl: './formulario-empresa.component.scss',
})
export class FormularioEmpresaComponent {
  @Output() empresaCreada = new EventEmitter<void>();
  @Input() empresas: Empresa[] = [];

  public empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private _snackBar: MatSnackBar
  ) {
    this.empresaForm = this.fb.group({
      nombre: [''],
      descripcion: [''],
      vacantes: this.fb.array([]),
      contacto: this.fb.group({
        telefono: [''],
        emails: this.fb.array([this.fb.control('')]),
      }),
      logo: [''], // Campo para el logo
      beneficios: this.fb.array([]),
    });

    // Depuración: Verificar el estado inicial del formulario
    console.log('Estado inicial del formulario:', this.empresaForm.value);
  }

  get vacantes(): FormArray {
    return this.empresaForm.get('vacantes') as FormArray;
  }

  get emails(): FormArray {
    return this.empresaForm.get('contacto.emails') as FormArray;
  }

  get beneficios(): FormArray {
    return this.empresaForm.get('beneficios') as FormArray;
  }

  addVacante() {
    this.vacantes.push(
      this.fb.group({
        titulo: [''],
        descripcion: [''],
        requisitos: this.fb.array([this.fb.control('')]),
      })
    );
  }

  addEmail() {
    this.emails.push(this.fb.control(''));
  }

  addRequisito(index: number) {
    const requisitos = this.vacantes.at(index).get('requisitos') as FormArray;
    requisitos.push(this.fb.control(''));
  }

  addBeneficio() {
    this.beneficios.push(this.fb.control(''));
  }

  removeBeneficio(index: number) {
    this.beneficios.removeAt(index);
  }

  registrarEmpresa() {
    // Depuración: Verificar si el formulario es válido
    console.log('Formulario válido:', this.empresaForm.valid);

    if (this.empresaForm.valid) {
      const empresaData = {
        ...this.empresaForm.getRawValue(),
        id: this.empresaForm.get('id')?.value,
      };

      // Depuración: Verificar los datos que se están enviando
      console.log('Datos de la empresa a enviar:', empresaData);

      this.apiService.crearEmpresa(empresaData).subscribe({
        next: () => {
          this._snackBar.open('Empresa creada con éxito', 'Cerrar', {
            duration: 5000,
            panelClass: ['success-snackbar'],
          });
          this.empresaCreada.emit();
          this.empresaForm.reset();

          // Depuración: Verificar el estado del formulario después de resetear
          console.log(
            'Estado del formulario después de resetear:',
            this.empresaForm.value
          );
        },
        error: (error) => {
          this._snackBar.open('Error al crear la empresa', 'Cerrar', {
            duration: 5000,
            panelClass: ['error-snackbar'],
          });

          // Depuración: Verificar el error recibido
          console.error('Error al crear la empresa:', error);
        },
      });
    } else {
      // Depuración: Verificar los errores del formulario
      console.log('Errores del formulario:', this.empresaForm.errors);
    }
  }
}
