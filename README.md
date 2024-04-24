
# Resilient Frontend

This repository contains a simple frontend application designed to test the connectivity and resilience of a backend service. It is part of a series of resilient demo applications intended to demonstrate handling and recovering from service interruptions.

## Installation

To install and run this application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/scanalesespinoza/resilient-frontend.git
   ```
2. Navigate into the repository directory:
   ```bash
   cd resilient-frontend
   ```
3. Install dependencies (assuming you have a proper JavaScript or Quarkus environment setup):
   ```bash
   npm install
   # or for Quarkus
   ./mvnw compile
   ```
4. Start the application:
   ```bash
   npm start
   # or for Quarkus
   ./mvnw quarkus:dev
   ```

## Testing

To test the application:

1. Ensure the backend service is running and accessible.
2. Open your browser and navigate to the application's URL (usually `http://localhost:8080` for local development).
3. Use the application interface to interact with the backend service and observe how the application handles loss of connectivity and recovery.

## Contributing

Contributions to this project are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push your branch and open a pull request against the main branch.

For more details, see the contribution guidelines in the repository.

## License

This project is licensed under the Apache License 2.0. See the LICENSE file in the repository for the full license text.
