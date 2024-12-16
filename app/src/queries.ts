import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
    query Item {
        items {
            id
            name
            description
            price
            stocks
        }
    }
`;