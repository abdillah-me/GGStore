1. npm install --save sequelize && npm install --save pg pg-hstore && npm install --save-dev sequelize-cli && npx sequelize-cli init 
2. setting config.json, ubah ke "postgres"
3. npx sequelize-cli db:create 
4. npx sequelize-cli model:generate --name User --attributes emial:string,password:string,role:string
5. npx sequelize-cli model:generate --name Profile --attributes firstName:string,lastName:string,address:text
6. npx sequelize-cli model:generate --name Items --attributes productName:string,price:integer,category:string,img:string
7. npx sequelize-cli model:generate --name Transaction --attributes totalPrice:integer,price:integer,isComplete:boolean
8. hapus asyc dan await
9. hasmany
10. belongto
11. npx sequelize-cli migration:create --name addForeignKey
12. buat queryInterface addColumn
13. npx sequelize-cli db:migrate
14. npx sequelize-cli seed:generate --name seedName
15. lakukan settingan : bulkinsert dan bulkDelete
16. npx sequelize-cli db:seed:all     
17. npm install express ejs 
18. setting app.js 
19. 