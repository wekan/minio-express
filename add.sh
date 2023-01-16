# ./add.sh bucketname key secret

mc config host add $1 http://192.168.0.20:9000 $2 $3
