# Usamos Ubuntu como base
FROM ubuntu:24.04

# Evitamos interacciones al instalar paquetes
ENV DEBIAN_FRONTEND=noninteractive

# Actualizamos e instalamos Apache, PHP, MariaDB y phpMyAdmin
RUN apt-get update && \
    apt-get install -y apache2 php libapache2-mod-php php-mysql mariadb-server wget unzip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Habilitamos mod_rewrite
RUN a2enmod rewrite

# Configuramos MariaDB (solo para desarrollo)
RUN service mysql start && \
    mysql -e "CREATE DATABASE IF NOT EXISTS mydb;" && \
    mysql -e "CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'userpassword';" && \
    mysql -e "GRANT ALL PRIVILEGES ON mydb.* TO 'user'@'%';" && \
    mysql -e "FLUSH PRIVILEGES;"

# Instalamos phpMyAdmin
RUN wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O /tmp/pma.zip && \
    unzip /tmp/pma.zip -d /var/www/html/ && \
    mv /var/www/html/phpMyAdmin-*-all-languages /var/www/html/phpmyadmin && \
    rm /tmp/pma.zip

# Copiamos tu código PHP
COPY ../ /var/www/html/

# Ajustamos permisos
RUN chown -R www-data:www-data /var/www/html

# Exponemos el puerto 80
EXPOSE 80

# Script de inicio
CMD service mysql start && apachectl -D FOREGROUND