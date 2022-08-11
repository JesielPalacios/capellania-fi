import { gql } from '@apollo/client'

export const GET_INTERVIEWS = gql`
  {
    interviews {
      _id
      idInterview
      topic
      topicDescription
      actionsDescription
      referralDepartment
      createdAt
      updatedAt
      userCreate
      userUpdate
      # userCreate {
      #   name
      # }
      # userUpdate {
      #   name
      # }
      __typename
    }
  }
`

export const GET_INTERVIEW = gql`
  query getInterviewById($idInterview: String) {
    interview(idInterview: $idInterview) {
      _id
      idInterview
      topic
      topicDescription
      actionsDescription
      referralDepartment
      createdAt
      updatedAt
      userCreate
      userUpdate
      # userCreate {
      #   name
      # }
      # userUpdate {
      #   name
      # }
      __typename
    }
  }
`

// Variables
// {
//   "id": "3b7c28a0-114d-11ed-950c-3de3b7805b14"
// }
