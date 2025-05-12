import { gql } from "@apollo/client";

export const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      emoji
      code
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const GET_ALL_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;
