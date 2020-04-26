insert into APP_USER(ID, PASSWORD, USERNAME) values(1, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'admin'); -- root
insert into APP_USER(ID, PASSWORD, USERNAME) values(2, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'igor'); -- root
insert into APP_USER(ID, PASSWORD, USERNAME) values(3, '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'sofia'); -- root
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'ADMIN');
insert into USER_ROLE(APP_USER_ID, ROLE) values(2, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(3, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'PREMIUM_MEMBER');