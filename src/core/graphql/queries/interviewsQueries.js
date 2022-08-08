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
  query Interview($interviewId: String!) {
    interview(interviewId: $interviewId) {
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
