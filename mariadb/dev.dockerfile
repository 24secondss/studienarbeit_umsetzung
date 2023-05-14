FROM mariadb:latest

ADD setup.sql /docker-entrypoint-initdb.d

EXPOSE 3306