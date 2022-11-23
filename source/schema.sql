DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;


CREATE TABLE departments (

  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  department_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
);

CREATE TABLE roles (

    id INT NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
);

CREATE TABLE employees (

    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    department VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    manager VARCHAR(30) NOT NULL,
);

