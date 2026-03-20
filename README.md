# Lab 05: React and .NET Deployment to Azure

This project demonstrates how to deploy a full-stack application (React frontend and .NET Web API backend) to Microsoft Azure using GitHub Actions for CI/CD.

## 🚀 Project Overview

- **Frontend**: React.js application hosted on **Azure Static Web Apps**.
- **Backend**: .NET 8 Web API hosted on **Azure App Service**.
- **CI/CD**: Automated deployment via **GitHub Actions**.

## 🛠 Features

- **CORS Support**: Configured in .NET to allow secure communication with the frontend.
- **RESTful API**: Simple weather forecast endpoint powered by .NET.
- **Modern UI**: Clean React interface to display data fetched from the cloud backend.

## 🌐 Live Demonstration

- **Frontend App**: [Azure Static Web App Link] (Insert your URL here)
- **Backend API**: [https://csp-backend-c7agaxgwb5csghfv.eastasia-01.azurewebsites.net/weatherforecast](https://csp-backend-c7agaxgwb5csghfv.eastasia-01.azurewebsites.net/weatherforecast)

## 📂 Project Structure

- `/frontend`: React source code.
- `/backend`: .NET Web API source code.
- `/.github/workflows`: Azure-generated CI/CD pipelines.

## ⚡ Setup and Local Run

### Prerequisites
- Node.js & npm
- .NET 8.0 SDK

### Running Backend
```bash
cd backend
dotnet run
```
Backend will be available at `http://localhost:5113`.

### Running Frontend
```bash
cd frontend
npm install
npm start
```
Frontend will be available at `http://localhost:3000`.

---
*Created for Case Study Project - Semester 1, 2025*
