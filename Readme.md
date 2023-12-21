# Car Rental System developped by Elie-chris El Haddad 

## Overview

This repository contains the code for a comprehensive vehicle rental booking system, designed to  process the renting of automobiles. The system is built as a client-server application using Node.js, providing a user-friendly platform for users to search, book, and manage car rentals efficiently.
During the first phase of this project the main focus was getting the backEnd API functional with the core calls ready. 
                     
# Table of Contents

1. [Client-Server Architecture](#1-client-server-architecture)
2. [Database Design](#2-database-design)
3. [API Calls](#3-API-Calls)

## Features

### 1. Client-Server Architecture

Using Node.js, the system incorporates both client-side and server-side components to ensure a smooth and responsive user experience.

### 2. Database Design

The system employs a relational database with the following tables:

- **User**: Stores user information.
- **Car**: Contains details about rental vehicles.
- **Rental Agreement**: Manages legally binding contracts for car rentals.

### 3. API Calls 

For the API created we have an endpoint for each entity in the project in order to keep developpement clear and scalable.

I. User entity (/api/user):
      getUserById (/getUserById) : 
      Method: GET
      Params: User_ID : int 

      getAllUsers (/allUsers):
      Method: GET
      No params needed 

      addUser (/addUser):
      Method: POST
      Params:  Name : string , Last_Name : string , Phone : string , Email : string(type email) , Password : string (type Password)
      PS: Conventional models are to be followed for the Phone , Email and Password everytime they are used as params 

      updateUser (/updateUser):
      Method: PATCH
      Params: User_ID : int , Name : string , Last_Name : string , Phone : string , Email : string(type email)

      deleteUser (/deleteUser):
      Method: DELETE
      Params: User_ID : int 

II. Car entity (/api/car):
      getCarById (/getcarById) : 
      Method: GET
      Params: car_ID : int 

      getAllCars (/allcars):
      Method: GET
      No params needed 

      addCar (/addcar):
      Method: POST
      Params:  Make: string , Model: string , Year : string , Price_per_day : float 

      updateCar (/updatecar):
      Method: PATCH
      Params: Car_ID : int ,Make: string , Modele: string , year : string , Price_per_day : float 

      deleteCar (/deleteCar):
      Method: DELETE
      Params: Car_ID : int 
      
III. RentalAgreement entity (/api/RentalAgreement):
      getRentalAgreementById (/getRentalAgreementById) : 
      Method: GET
      Params: Agreement_id : int 

      getAllRentalAgreements (/allRentalAgreements):
      Method: GET
      No params needed 

      addRentalAgreement (/addRentalAgreement):
      Method: POST
      Params:  User_ID : int , Car_ID : int , Pick_up_date : Date , Return_Date : Date 

      updateRentalAgreement (/updateRentalAgreement):
      Method: PATCH
      Params:  Agreement_id : int , Pick_up_date : Date , Return_Date : Date 

      deleteRentalAgreement (/deleteRentalAgreement):
      Method: DELETE
      Params: Agreement_id : int 

## I hope you enjoy this project and thank you for your time and support. "# carRentalProject" 
"# carRentalProject" 
