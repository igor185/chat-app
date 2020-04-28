insert into APP_USER(ID, PASSWORD, USERNAME, AVATAR) values(1, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'admin', 'https://api.adorable.io/avatars/200/Tamela-Desantis'); -- root
insert into APP_USER(ID, PASSWORD, USERNAME, AVATAR) values(2, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'igor', 'https://api.adorable.io/avatars/200/Fred-Jones'); -- root
insert into APP_USER(ID, PASSWORD, USERNAME, AVATAR) values(3, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'sofia', 'https://api.adorable.io/avatars/200/Domingo-Collier'); -- root
insert into APP_USER(ID, PASSWORD, USERNAME, AVATAR) values(4, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'temp', 'https://api.adorable.io/avatars/200/Brendan-Harvey'); -- root
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'ADMIN');
insert into USER_ROLE(APP_USER_ID, ROLE) values(2, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(3, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(4, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'PREMIUM_MEMBER');