## Agrega estas variables en tu archivo .env

* MONGO_URI=your_mongo_uri
* JWT_SECRET=secret or anything random
* CLIENT_URL=http://localhost:3000 or any localhost port that you are using
* PORT=8000

## Para utilizar de manera local el proyecto debe modificar lo siguiente:
Debes modificar el serverURL en el context de client

* En userContext remplaza:
* https://ticktask.onrender.com por http://localhost:8000/
* En taskContext remplaza:
* https://ticktask.onrender.com/api/v1 por http://localhost:8000/api/v1
