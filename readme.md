# Laravel Passport Authentication API

This project is a small application used to create an authentication api to be able to register/login/logout using React JS as a front-end app, and Laravel and Passport for the backend.

## Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [NVM](https://github.com/nvm-sh/nvm) to install Node.js.
* Composer - [Download & Install Composer](https://getcomposer.org/).

## Installing
#### Cloning The GitHub Repository
The recommended way to use this application is to clone it.

```bash
    $ git clone https://github.com/RichardHpa/laravel-passport-auth
    $ cd laravel-passport-auth
```

#### Installing Dependencies
Because this project uses both Laravel and React JS, you need to install two sets of dependancies using both composer and npm.
```bash
    $ composer install
    $ npm install
```

#### Setting up your Database
Laravel uses its own database management system, but there are a few things you need to set up first.  
Firstly you need to create your `.env` file. An example how your file should look has been provided.  
You then need to create a blank database and fill your `.env` with the relevant information.  
```
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=
```
Once the connection has been made, you need to create a key for your application as well as fill the database with the tables which have been created through Laravel.

```bash
    $ php artisan key:generate
    $ php artisan migrate
```

## Viewing your Application
To start the app on http://localhost:8000/ you need to turn call the command bellow.
```bash
    $ php artisan serve
```
## Developing the Application
This application uses React JS to run the front end, so if you are wanting to develop the front end further you need to turn on the development enviorment so your components get compiled.
```bash
    $ npm run watch
```

## Built With

* [Laravel](https://laravel.com/) - PHP Framework
* [Bootstrap 4](https://getbootstrap.com/) - HTML/CSS Framework
* [React JS](https://reactjs.org/) - JavaScript library for building user interfaces

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This repository loosely follows the [Vue JS](https://www.youtube.com/watch?v=HGh0cKEVXPI&list=FLyn8KlZ3n_JDqiXzNUROwKw&index=2&t=894s) tutorial by  [Andre Madarang](https://www.youtube.com/channel/UCtb40EQj2inp8zuaQlLx3iQ)
