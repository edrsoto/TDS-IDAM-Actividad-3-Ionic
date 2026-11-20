import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonButton,
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonButton
  ]
})
export class HomePage {
  tasaCambio: number = 7.8;
  dolares: string = '';
  quetzales: string = '';

  constructor(private alertController: AlertController) {}

  convertirDolaresAQuetzales() {
    const montoDolares = parseFloat(this.dolares);
    
    // Validación 1: Monto en dólares vacío o no numérico
    if (!this.dolares || isNaN(montoDolares)) {
      this.mostrarError('Por favor, ingresa un monto válido en dólares.');
      return;
    }

    // Validación 2: Monto negativo
    if (montoDolares < 0) {
      this.mostrarError('El monto en dólares no puede ser negativo.');
      return;
    }

    // Validación 3: Tasa de cambio inválida
    if (!this.tasaCambio || this.tasaCambio <= 0) {
      this.mostrarError('La tasa de cambio debe ser mayor a 0.');
      return;
    }

    // Cálculo: USD → GTQ
    const resultado = montoDolares * this.tasaCambio;
    this.quetzales = resultado.toFixed(2);
  }

  convertirQuetzalesADolares() {
    const montoQuetzales = parseFloat(this.quetzales);
    
    // Validación 1: Monto en quetzales vacío o no numérico
    if (!this.quetzales || isNaN(montoQuetzales)) {
      this.mostrarError('Por favor, ingresa un monto válido en quetzales.');
      return;
    }

    // Validación 2: Monto negativo
    if (montoQuetzales < 0) {
      this.mostrarError('El monto en quetzales no puede ser negativo.');
      return;
    }

    // Validación 3: Tasa de cambio inválida
    if (!this.tasaCambio || this.tasaCambio <= 0) {
      this.mostrarError('La tasa de cambio debe ser mayor a 0.');
      return;
    }

    // Cálculo: GTQ → USD
    const resultado = montoQuetzales / this.tasaCambio;
    this.dolares = resultado.toFixed(2);
  }

  limpiar() {
    this.dolares = '';
    this.quetzales = '';
  }

  async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}