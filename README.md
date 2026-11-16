# Academia Triunfadores

Página web de la Academia Triunfadores hecha con HTML, Bootstrap 5, jQuery, Node.js (Express) y MySQL.

## Ejecutar en mi PC (XAMPP)

1. Encender MySQL en XAMPP (Apache no es necesario).
2. En phpMyAdmin, importar el archivo `academia.sql`.
3. En la carpeta del proyecto:

```
npm install
npm start
```

4. Abrir `http://localhost:3000`.

## Subir el proyecto a GitHub

Desde la carpeta del proyecto (la que tiene `index.js`):

```
git init
git add .
git commit -m "Primera versión de la academia"
git branch -M main
git remote add origin https://github.com/USUARIO/academia-web.git
git push -u origin main
```

## Publicar en Railway

1. New Project -> Deploy from GitHub repo -> elegir `academia-web`.
2. En el mismo proyecto: + New -> Database -> MySQL.
3. En el servicio de la página -> Variables, agregar:

| Variable | Valor |
|---|---|
| MYSQLHOST | `${{MySQL.MYSQLHOST}}` |
| MYSQLPORT | `${{MySQL.MYSQLPORT}}` |
| MYSQLUSER | `${{MySQL.MYSQLUSER}}` |
| MYSQLPASSWORD | `${{MySQL.MYSQLPASSWORD}}` |
| MYSQLDATABASE | `academia` |

4. En el servicio MySQL -> Connect, copiar los datos de conexión pública, conectarse con MySQL Workbench o HeidiSQL y ejecutar `academia.sql`.
5. En el servicio de la página -> Settings -> Networking -> Generate Domain.
6. Abrir la dirección generada y probar Contactos y Login (usuarioxy / 123456).

Cada `git push` vuelve a publicar la página automáticamente.
