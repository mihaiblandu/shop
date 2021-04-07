docker run -p 80:80 -p 443:443 \
    -v $PWD/build:/var/www/html \
 caddy