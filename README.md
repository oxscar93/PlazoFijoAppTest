# Project Title

PlazoFijoApp By Oscar Lescano

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Install Node JS from official page
* Install Angular-CLI and TypeScript Compiler to run the front end locally from official pages
* Install MySql server

### Installing

* After cloning the project, follow these next steps:

	Run the following command to install node dependencies in both projects (PlazoFijoApp and PlazoFijoWebService folders) 

```
npm install
```

* Run the scripts (SchemaDB.sql and TestData.sql) located in PlazoFijoWebService/api/scripts


Run the project:

* After installing node dependencies, first run the backend service with the following command (inside PlazoFijoWebService folder):
	
```
npm start
```

* To run the front end application, run the following command (inside PlazoFijoApp)

```
ng serve
```

## Deployment

* Default Local Ports:

	* Node Js service: 3001
	* FrontEnd App: 4200

* FrontEnd:
	By default, the project was configured to run locally, but you can change service endpoint via environment.ts file.

## Demo

* To see a full demo, please follow this link: http://192.241.152.234/plazoFijoApp/
