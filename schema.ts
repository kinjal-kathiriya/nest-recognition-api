
export const typeDefs = /* GraphQL */ `
  """
  Organization roles for RBAC and analytics access.
  TODO: Expand descriptions as needed.
  """
  enum Role {
    EMPLOYEE
    MANAGER
    HR
    ADMIN
  }

  """
  Controls who can see a recognition and whether the sender is revealed.
  """
  enum Visibility {
    PUBLIC
    PRIVATE
    ANONYMOUS
  }

  """
  A company user.
  """
  type User {
    id: ID!
    name: String!
    email: String!
    role: Role!
    team: String
  }

  """
  A recognition message exchanged between coworkers.
  """
  type Recognition {
    id: ID!
    sender: User!         # TODO: Resolver must apply anonymity/visibility rules
    recipient: User!
    message: String!
    emoji: String
    visibility: Visibility!
    createdAt: String!
  }

  type AnalyticsByTeam {
    team: String
    count: Int!
  }

  type AnalyticsByKeyword {
    keyword: String!
    count: Int!
  }

  type Query {
    """
    The current authenticated user.
    """
    me: User!

    """
    List recognitions with optional filters and pagination.
    Implement visibility filtering in resolvers.
    """
    recognitions(
      team: String
      recipientId: ID
      keyword: String
      first: Int
      after: String
    ): [Recognition!]!

    """
    Team-level analytics (RBAC-gated).
    """
    analyticsByTeam: [AnalyticsByTeam!]!

    """
    Keyword-level analytics (RBAC-gated).
    """
    analyticsByKeyword: [AnalyticsByKeyword!]!
  }

  type Mutation {
    """
    Send a new recognition (brief message + optional emoji).
    """
    sendRecognition(
      recipientId: ID!
      message: String!
      emoji: String
      visibility: Visibility!
    ): Recognition!

    """
    Delete or redact a recognition (RBAC-gated).
    """
    deleteRecognition(id: ID!): Boolean!
  }

  type Subscription {
    """
    Real-time notifications of recognitions for a specific recipient.
    """
    recognitionReceived(userId: ID!): Recognition!
  }
`;
