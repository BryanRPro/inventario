# Proyecto inventario
### inicio del proyecto
abrimos la terminal en la carpeta del proyecto y hacemos el comando npm init

```
npm init -y
``` 

despues instalamos las dependencias

```
npm install express mongoose dotenv cors
```

despues instalamos dependencias de desarrollo

```
npm install --save-dev nodemon
```

abrimos IDE (Entorno de Desarrollo Integrado)

```
code .
```

creamos los archivos

```
touch index.js .env README.md .gitignore
```

dentro de  .gitignore escribimos lo siguiente: 

```
node_modules
.env
```

dentro de index.js pusimos el codigo:
```
```
- const express = require("express"): traemos express desde node_modules para poderlo usarlo.
- const app = express(): creamos una instancia o una copia de express para usarla en nuestra app.
- PORT = 3000: definimos el puerto que queremos usar
- app.set("port",PORT): configuramos el puerto en nuestra app
- app.get("/hola",: definimos una ruta y un verbo HTTP
- (req,res)=>{ : creamos una función que tiene como parametros req:request y res:response 
-  request es lo que recibimos  
-  response es lo que respondemos 
- res.send("hola mundo"): enviamos la respuesta
- app.listen(PORT,()=>{ : escucha el Puerto y avisame en console.log
- console.log(`Listening port ${PORT}`): el mensaje de que todo esta OK
 



# inventario
