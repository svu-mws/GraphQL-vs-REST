Backend API
===========
-   RESTful API

    -   all users:

        http://localhost:3000/users/

    -   user by id:

        http://localhost:3000/users/:id

    -   all posts:
        
        http://localhost:3000/posts/

    -   post by id:

        http://localhost:3000/posts/:id

    -   post comments:

        http://localhost:3000/posts/:id/comments

    -   post likes:

        http://localhost:3000/posts/:id/likes

    -   comment likes:

        http://localhost:3000/comments/:id/likes

-   GraphQL

    http://localhost:3000/graphql

    -   All Data Query:
    ```graphql
    {
      users {
        id
        name
        posts {
          content
          comments {
            content
            user {
              name
            }
            likes {
              user {
                name,
              }
            }
          }
          likes {
            user {
              name
            }
          }
        }
      }
    }
    ```

    -   User By ID:
    ```graphql
    {
      user(id:"5cd6ad5e4c43364558ba67a1"){
        id,
        name,
        email,
        posts {
          id,
          content
        }
      }
    }
    ```
    -   Add User
    ```graphql
    mutation {
      addUser(name: "New User", email: "new@gmail.com") {
        name
      }
    }
    ```
