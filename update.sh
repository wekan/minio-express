## old: mc admin update wekan/

rm minio-amd64 minio-arm64

# amd64
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
mv minio minio-amd64

# arm64
wget https://dl.min.io/server/minio/release/linux-arm64/minio
chmod +x minio
mv minio minio-arm64

