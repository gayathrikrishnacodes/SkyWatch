# 🌤️ SkyWatch

### Real-Time Weather Forecast Application

<p align="center">
  A modern, responsive weather application that provides real-time weather information for cities around the world.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/API-OpenWeather-orange?style=for-the-badge">
</p>

<p align="center">
  <a href="https://remarkable-hotteok-4ffaf1.netlify.app/">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-Open%20SkyWatch-00C7B7?style=for-the-badge">
  </a>
</p>

## 🌍 About SkyWatch

**SkyWatch** is a responsive weather application developed using **HTML5, CSS3, and Vanilla JavaScript**.

The application integrates the **OpenWeather API** to retrieve real-time weather data and dynamically update the user interface based on the searched location.

The project was created to practice real-world JavaScript concepts including **REST API integration, asynchronous programming, Fetch API, DOM manipulation, event handling, and dynamic content rendering**.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 City Search | Search weather information by city name |
| 🌡️ Temperature | Displays the current temperature in °C |
| 🌤️ Weather Condition | Displays the current weather condition |
| 💧 Humidity | Shows the current humidity percentage |
| 🌬️ Wind Speed | Displays current wind speed |
| 🌡️ Feels Like | Shows the perceived temperature |
| 🖼️ Dynamic Icons | Weather icons change according to API data |
| 📅 Current Date | Displays the current date dynamically |
| 🌦️ Forecast | Displays upcoming weather information |
| ⚠️ Validation | Prevents empty search submissions |
| ❌ Error Handling | Handles invalid city searches |
| 📱 Responsive UI | Designed for different screen sizes |

---

## 🎨 Interface

### Weather Dashboard


<p align="center">
  <img src="ss.png" width="800">
</p>

> Replace the screenshot names above with your actual screenshot filenames.

---

## 🛠️ Tech Stack

### Frontend

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

### API & Web Technologies

- **OpenWeather API**
- **Fetch API**
- **REST API**
- **JSON**
- **Async/Await**

### Development Tools

- **VS Code**
- **Git**
- **GitHub**

---

## 🔄 Application Flow

```text
┌─────────────────────┐
│   Enter City Name   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Search Button     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   Fetch API Request │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   OpenWeather API   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   JSON Weather Data │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Dynamic DOM Update  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  Weather Dashboard  │
└─────────────────────┘
