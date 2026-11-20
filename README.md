# 💱 DivisApp - Conversor de Divisas USD/GTQ

<div align="center">

![Ionic](https://img.shields.io/badge/Ionic-7.x-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-5.x-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)

**Aplicación móvil híbrida para conversión rápida de divisas entre Dólares (USD) y Quetzales (GTQ)**

[Características](#-características) • [Instalación](#-instalación) • [Uso](#-uso) • [Tecnologías](#-tecnologías) • [Autor](#-autor)

</div>

---

## 📖 Descripción

**DivisApp** es una aplicación móvil desarrollada con **Ionic Framework** y **Angular** que permite a los usuarios realizar conversiones de moneda entre Dólares Estadounidenses (USD) y Quetzales Guatemaltecos (GTQ) de manera rápida, precisa y sin necesidad de conexión a internet.

### 🎯 Objetivo

Proporcionar una herramienta sencilla y confiable para que usuarios en Guatemala (turistas, estudiantes, viajeros o público general) puedan calcular equivalencias monetarias en tiempo real.

### 💡 Problema que Resuelve

- ✅ Eliminación de cálculos manuales propensos a errores
- ✅ Acceso instantáneo a conversiones sin conexión a internet
- ✅ Interfaz intuitiva que no requiere conocimientos técnicos previos
- ✅ Validación de datos para evitar errores de entrada

---

## ✨ Características

### Funcionalidades Principales

- 🔄 **Conversión Bidireccional**: Convierte de USD a GTQ y de GTQ a USD
- 📊 **Tasa de Cambio Personalizable**: Ajusta la tasa según el mercado actual
- 🧹 **Función de Limpieza**: Reinicia todos los campos con un solo toque
- ⚠️ **Validación Inteligente**: Detecta y notifica errores de entrada
- 📱 **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- 🎨 **Interfaz Moderna**: Componentes nativos de Ionic con diseño Material Design

### Características Técnicas

- 🚀 **Rendimiento Óptimo**: Compilación con Angular AOT (Ahead-of-Time)
- 📦 **Sin Dependencias Externas**: No requiere APIs ni conexión a internet
- 🔒 **Tipado Fuerte**: Código TypeScript para mayor seguridad
- 🎯 **Componentes Standalone**: Arquitectura moderna de Angular 17+
- 📲 **Multiplataforma**: Funciona en iOS, Android y Web

---

## 🖼️ Capturas de Pantalla

<div align="center">

### Pantalla Principal
![Pantalla Principal](docs/screenshots/home.png)

### Conversión USD a GTQ
![Conversión USD a GTQ](docs/screenshots/usd-to-gtq.png)

### Conversión GTQ a USD
![Conversión GTQ a USD](docs/screenshots/gtq-to-usd.png)

### Validación de Errores
![Validación de Errores](docs/screenshots/error-validation.png)

</div>

> **Nota:** Las capturas de pantalla son referenciales. Actualiza las rutas según tus imágenes reales.

---

## 🛠️ Tecnologías Utilizadas

### Frontend

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Ionic Framework** | 7.x | Framework de componentes UI móviles |
| **Angular** | 17.x | Framework de desarrollo frontend |
| **TypeScript** | 5.x | Lenguaje de programación principal |
| **SCSS** | - | Preprocesador de estilos |
| **HTML5** | - | Estructura semántica |

### Herramientas de Desarrollo

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **Node.js** | 18+ | Entorno de ejecución JavaScript |
| **npm** | 9+ | Gestor de paquetes |
| **Ionic CLI** | 7+ | Herramienta de línea de comandos |
| **Angular CLI** | 17+ | Herramienta de compilación |
| **Capacitor** | 5.x | Puente para apps nativas |

### Plataformas Soportadas

- 🌐 **Web**: Chrome, Firefox, Safari, Edge
- 📱 **Android**: API 22+ (Android 5.1+)
- 🍎 **iOS**: 13.0+

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (versión 9 o superior)
- [Git](https://git-scm.com/) (para clonar el repositorio)

### Instalación de Dependencias Globales

```bash
# Instalar Ionic CLI globalmente
npm install -g @ionic/cli

# Instalar Angular CLI globalmente
npm install -g @angular/cli

# Verificar instalaciones
node --version
npm --version
ionic --version
ng version