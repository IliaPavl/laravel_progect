# laravel_progect
db config 
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_base
DB_USERNAME=root
DB_PASSWORD=

to start 

..\laravel-base> php artisan migrate ( create database table) 
..\laravel-base> php artisan serve ( to start server) 

..\laravel-base\vue> npm run dev (to start vue progect)

problems

1) Register on sait
2) go to http://localhost:5173/map
3) click button "new Photo"
4) cheack console.log() on browser

on code

go to 
1) ..\laravel-base\vue\src\views\Map.vue  line  145 call save method 
2) ..\laravel-base\vue\src\store\store.js line 93 axios post message
3) ..\laravel-base\app\Http\Controllers\PhotoController.php line 37 error "Call to a member function getClientOriginalName() on array"


