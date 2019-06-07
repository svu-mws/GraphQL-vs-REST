import {createClient} from "urql";

export default createClient({
    url: 'http://localhost:8080/graphql', // Your GraphQL endpoint here
});