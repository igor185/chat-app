insert into APP_USER(ID, TIME, PASSWORD, USERNAME, AVATAR, ABOUT)
values
    (1, CURRENT_TIMESTAMP(), '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Lorenzo', 'https://api.adorable.io/avatars/200/Patricia-Huynh',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'),
    (2, CURRENT_TIMESTAMP(), '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Earl Lambert', 'https://api.adorable.io/avatars/200/Guy-Murray',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'), -- root
    (3, CURRENT_TIMESTAMP(), '$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Irving Campbell', 'https://api.adorable.io/avatars/200/Carlos-Ward',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'), -- root
    (4, CURRENT_TIMESTAMP(),'$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Preston Powers', 'https://api.adorable.io/avatars/200/Vasiliki-Hankins',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'), -- root
    (5, CURRENT_TIMESTAMP(),'$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Willie Ford', 'https://api.adorable.io/avatars/200/Virgina-Beach',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'), -- root
    (6, CURRENT_TIMESTAMP(),'$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'Lillie Holloway', 'https://api.adorable.io/avatars/200/Xochitl-Burkholder',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'), -- root
    (7, CURRENT_TIMESTAMP(),'$2a$10$kfzELyfSBvY9cIBkosSRLezFRa7FIFiPouwRmkz2G6rZa70FT3eOG', 'sofia', 'https://api.adorable.io/avatars/200/Ashley-Taylor',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc'); -- root
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'ADMIN');
insert into USER_ROLE(APP_USER_ID, ROLE) values(2, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(3, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(4, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(5, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(6, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(7, 'MEMBER');
insert into USER_ROLE(APP_USER_ID, ROLE) values(1, 'PREMIUM_MEMBER');