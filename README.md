# Simple shop application

This is an [Expo](https://expo.dev/) project.

To run the application locally, follow these steps:

1. **Clone the repository**
    
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
    
2. **Install dependencies:**
Ensure you have Node.js installed, then run:
    
    ```bash
    npm install
    ```
    
3. **Start the JSON Server:**
**JSON Server** is a simple tool that allows user to create a full fake REST API with zero coding. It serves as a quick way to prototype and test applications without the need for a backend server. In this project, JSON Server is used to simulate the backend for product data, allowing users to interact with and fetch data as if they were working with a real API.
Make sure you have JSON Server installed. You can start it with the following command:

    ```bash
    json-server --watch ./data/products.json
    ```
    

1. **Configure the API Base URL:**
Open the `apiConfig.ts` file located in the project directory and set the `BASE_URL` variable to your JSON Server:
    
    ```tsx
    const BASE_URL = 'http://<your-json-server-url>';
    ```
    
2. **Run the application:**
Use Expo to start the application:
    
    ```bash
    npx expo start
    ```
    
3. **Open the app:**
You can use the Expo Go app on your mobile device or a simulator/emulator to view the app.