FROM mysql:latest

ENV MYSQL_USER=root
ENV MYSQL_ROOT_PASSWORD=12345678
ENV MYSQL_PASSWORD=12345678

VOLUME /home/david/mysql/

CMD ["mysqld"]