# DIGITAL_LIFE_WRAPPED

## Overview
DIGITAL_LIFE_WRAPPED is an application designed to monitor and analyze device usage over a year, providing personalized recommendations for apps and activities. The goal is to help users understand their digital habits and encourage healthier usage patterns.

## Features
- Comprehensive tracking of device usage across various applications.
- Yearly summaries and insights similar to Spotify Wrapped.
- Personalized recommendations for apps and activities based on usage data.
- User-friendly web interface for visualizing data and insights.

## Setup Instructions
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/DIGITAL_LIFE_WRAPPED.git
   cd DIGITAL_LIFE_WRAPPED
   ```

2. **Install dependencies:**
   For the web application:
   ```
   cd apps/web
   npm install
   ```

   For the collector application:
   ```
   cd ../collector
   npm install
   ```

   For shared packages:
   ```
   cd ../../packages/ui
   npm install
   cd ../config
   npm install
   cd ../types
   npm install
   ```

3. **Run the applications:**
   To start the web application:
   ```
   cd ../web
   npm start
   ```

   To run the collector application:
   ```
   cd ../collector
   npm start
   ```

## Usage Guidelines
- Use the web application to view your device usage statistics and recommendations.
- The collector application runs in the background to gather usage data. Ensure it is running to collect accurate information.
- Regularly check the web app for updates and new recommendations based on your usage patterns.

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.