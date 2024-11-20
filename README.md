# Event Manager

### Event Management Application

[**Live Application Link**](https://stockimage-platform.onrender.com/)

This application is an event management platform where users can create, edit, and delete events.

## Table of Contents

- [Overview](#overview)
- [Features and Functionalities](#features-and-functionalities)
  - [User Authentication](#1-user-authentication)
  - [Event Management](#2-image-management)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
  - [Clone the Repository](#1-clone-the-repository)
  - [Install Dependencies](#2-install-dependencies)
  - [Set Up Environment Variables](#3-set-up-environment-variables)
  - [Run the Application](#4-run-the-application)
- [API Endpoints](#api-endpoints)
  - [User Authentication](#user-authentication)
  - [Event Management](#EventManagement)
- [Usage](#usage)
- [Live Link](#live-link)
- [Contact](#contact)

## Overview

The **Event Manager** is a user-friendly event management application designed to simplify the process of managing events. With features such as creating, editing, and deleting events, as well as a powerful filtering option, users can effortlessly organize and customize their event lists to suit their needs.

## Features and Functionalities

### 1. User Authentication

- **Register**: Users can sign up using their email ID and password.
- **Login**: Registered users can log in with their credentials to access the application.

### 2. Event Management

- **Create an Event**:
  - Users can create events by providing essential details such as title,description,date and location.
  
- **Edit and Delete**:
  - Users can update any of their event details.
  - Users can delete any of their events.

- **Filters**:
  - Users can filter their event by searching event name or location or date.


## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token) for user sessions

## Installation

Follow these steps to set up the application locally.

### 1. Clone the Repository

```bash

# Clone the repository
git clone https://github.com/ald2211/EventManager.git
cd EventManager

```

### 2. Install dependencies

## Backend
npm install

## Frontend
cd frontEnd
npm install

### 3. Set up environment variables

Create a `.env` file in the root folder with the following content:

- **MONGO_URI**: Your MongoDB Atlas URI
- **PORT**: your port
- **JWT_SECRET**: Your JWT Secret
- - **BASE_URL**: Your base url

### 4. Run the application

>root folder
npm start

## API Endpoints

### User Authentication
- **Register**: `POST /api/v1/auth/register`
- **Login**: `POST /api/v1/auth/login`

### Event Management
- **Fetch Events**: `GET /api/v1/events`
- **Create new Event**: `POST /api/v1/events`
- **Update an Event**: `PUT /api/v1/events/:id`
- **Get a Event**: `GET /api/v1/events/:id`
- **Delete an Event**: `DELETE /api/v1/events/:id`

  
## Usage

1. **Register**: Create a new account using your email and password.
2. **Login**: Log in with your credentials to access the Event management features.
3. **Create Event**: 
   - Add Event with details like name,description,date and location.
4. **Search Event**:
   - Perform filteration on the Events by using data like name,data and location to get the desired output.
5. **Update Event**: Modify the the Event based on the updation .
6. **Delete Event**: Remove the Event if it is no longer needed.


## Live Link

You can access the live version of the application at [Live Application Link]()
not yet configured


## Contact

For any inquiries or support, feel free to reach out via email:

**Email**: [afnadca2@gmail.com](mailto:afnadca2@gmail.com)

