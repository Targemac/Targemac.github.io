CREATE TABLE IF NOT EXISTS projects(
    id int(9) not null primary key AUTO_INCREMENT ,
    project_name varchar(255),
    project_status varchar(255),
    project_desc varchar(255),
    project_link varchar(255),
    project_image varchar(255),
);