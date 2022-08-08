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
