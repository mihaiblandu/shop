docker run -p 80:80 -p 443:443 \
    -v $PWD/build:/usr/share/caddy/ \
    -v caddy_config:/config \
    --domain localhost
    caddy