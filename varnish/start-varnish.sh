

sudo /opt/local/sbin/varnishd -a 127.0.0.1:80 -T 127.0.0.1:6082 -f ./default_varnish.vcl -s file,/tmp,500M -F