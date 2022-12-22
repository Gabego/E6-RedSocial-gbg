#Red Social API (markDown)

### Url base: http://localhost:9000/api/v1

- /auth
    - /login        -> Login con las credenciales del usuario para autenticar

- /post
    - /me           -> Mis propias publicaciones (GBG)
    - /users/:id    -> Publicaciones de usuarios en particular
    - /:id          -> Una publicacion en especifico
    - /id:/comments -> Los comentarios de una publicacion en especifico (GBG)
    - /:id/likes    -> Los likes de una publicacion en especifico

- /users
    - /me           ->Mi informacion de usuario
    - /:id          -> Un usuario especifico
    - /:id/follow   -> 


## OPCIONALES
- /follows
    - /:id

- /followers
    - /:id

## Controllers Posts 
- [x] FindAllPosts     
- [x] findPostById  
- [x] createPosts
- [x] updatePosts
- [x] deletePosts


## Services Posts
- [] getAllPosts    
- [] getPostById
- [] postNewPosts
- [] patchPosts
- [] deletePosts

