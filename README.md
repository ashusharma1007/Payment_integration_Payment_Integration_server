# Grey Collar Hub
> Earn better by working during peak hours for more than one company. Less waiting times and higher earnings. Utilize free time to earn more. Don't chosse a normal delivery or driver job. We let you apply for multiple jobs with big companies to maximize your earnings :fire:.

## Features
</br>

- [x] Password user login and SignUp using **sawo lab API**
- [x] Welcome landing page
- [x] Delivery jobs search with relevent filters
- [x] Easy job appliaction form
- [x] Easy client connect form
- [x] Delivery jobs for **womens** :heart:
- [x] Secure admin login
- [x] Admin dasboard 
- [x] Creates daily earning goals

## Demo version
</br>
A demo version is automatically deployed for this repositories:

- Deployment for frontend part -[https://grey-collar-hub.netlify.app](https://grey-collar-hub.netlify.app)
- Deployment for backend part - [https://pure-caverns-24063.herokuapp.com](https://pure-caverns-24063.herokuapp.com)

## Technology Stack 
</br>
Please get familiar with the components of the project in order to be able to contribute.

### components
- CSS: Styling web pages, html files
- Javascript: Primary programing language
- ReactJS: Javascript library for building User Interfaces
- nodejs: Used in the backend
- express: To create the calling API
- Material-UI: UI library for design system

#### External Service Dependencies
- MongoDB Atlas: A cloud database used to store user personal data username, passwords and individuals chats

## Requirements
</br>

- node --version >= 6
- npm --version >= 3


## Local Installation for frontend
</br>

### Steps
- `git clone <repository-url>` where `<repository-url>`is the link to the forked repository
- `cd HOrissa_frontend`

Note : If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```
git clone https://github.com/USERNAME/HOrissa_frontend
cd HOrissa_frontend
```

## Local Installation for backend
</br>

### Steps
- `git clone <repository-url>` where `<repository-url>`is the link to the forked repository
- `cd HackOdisha_server`

Note : If you want to contribute, first fork the original repository and clone the forked repository into your local machine followed by `cd` into the directory

```
git clone https://github.com/USERNAME/HackOdisha_server
cd HackOdisha_server
```

#### Config Variables
Define config variables in config.env.

- Create a free mongoDB atlas account at [https://www.mongodb.com](https://www.mongodb.com) and set a new cluster connection url equal to `db_connection_URL`
- Set `JWT_SECRET = <your_jwt_secret_string>` where `<your_jwt_secret_string>` is long alphanumerical string 
- Set `JWT_EXPIRE = <jwt_token_life_time>` where `<jwt_token_life_time>` is a string e.g. 10min, 30min

#### Starting server

```
cd HackOdisha_server
```
- Install all the dependencies with `npm install`
- Start the server with `npm start`
- Visit your API at [http://localhost:5000](http://localhost:5000.) :tada:

#### Starting frontend

```
cd HOrissa_frontend
```
- Install all the dependencies with `npm install`
- Start the server with `npm start`
- Visit your app at [http://localhost:3000](http://localhost:3000.) :tada:

## Contributing

> Feel free to **contribute** :heart_eyes:
- When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change."