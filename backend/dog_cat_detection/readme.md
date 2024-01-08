## MinIO for Windows

### Install from link
`https://min.io/download#/windows`

### Start MinIO server
`minio.exe server .`

## Other Links
`https://naomiaro.hashnode.dev/using-minio-with-django-storages`

## Run Minio Conatiner
`docker run -p 9000:9000 -d -p 9001:9001 -e "MINIO_ROOT_USER=minioadmin" -e "MINIO_ROOT_PASSWORD=minioadmin" minio/minio server /data --console-address ":9001"`

### Push Docker Image on hub
`docker buildx build --platform linux/amd64,linux/arm64 -t mgabani/dog_cat_backend:latest --push .`

### Get cluster IP of minio s3 server for API
`sudo kubectl get service minio-cls-service -n minio-dev`

### Delete backend pod
`sudo kubectl delete pod backend --namespace backend-dev`

### Delete minio pod
`sudo kubectl delete pod minio --namespace minio-dev`

### Apply kubernates .yml file
`sudo kubectl apply -f backend-dev.yml`

### Enter in docker container which is running in kubernates pods
`sudo kubectl exec -it backend bash -n backend-dev`
