const { gql } = require('apollo-server-micro')

const typeDefs = gql`
  type Hobbyist {
    id: ID! @id
    firstName: String!
    lastName: String!
    profileImage: [Image!]! @relationship(type: "HAS_IMAGES", direction: OUT)
    boughtLivestock: [Livestock!]!
      @relationship(type: "BOUGHT_LIVESTOCK", direction: OUT)
    hasAddresses: [Address!]!
      @relationship(type: "HAS_ADDRESSES", direction: OUT)
    ownsShop: Shop @relationship(type: "OWNS_SHOP", direction: OUT)
    likes: [Like!]! @relationship(type: "LIKES", direction: OUT)
    wishList: [WishListItem!]! @relationship(type: "WISH_LIST", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
    getScreenName: String! @computed(from: ["firstName", "lastName"])
  }

  union WishListableItem = Livestock

  type WishListItem {
    id: ID! @id
    creator: Hobbyist! @relationship(type: "WISH_LIST", direction: IN)
    item: WishListableItem!
      @relationship(type: "HAS_BEEN_WISHLISTED", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  type Livestock {
    id: ID! @id
    name: String!
    scientificName: String
    price: Float!
    isAvailable: Boolean @default(value: true)
    listedBy: Shop @relationship(type: "SELLS_LIVESTOCK", direction: IN)
    hasLikes: [Like!]! @relationship(type: "LIKABLE_ITEM", direction: OUT)
    images: [Image!]! @relationship(type: "HAS_IMAGES", direction: OUT)
    hasReviews: [Review!]! @relationship(type: "HAS_REVIEWS", direction: OUT)
    hasBeenWishListed: [WishListItem!]!
      @relationship(type: "HAS_BEEN_WISHLISTED", direction: OUT)
    quantity: Int! @default(value: 0)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  union EntityWithImages = Hobbyist | Livestock

  type Image {
    id: ID! @id
    externalId: String!
    url: String!
    alt: String!
    isPrimary: Boolean @default(value: false)
    belongsTo: EntityWithImages @relationship(type: "HAS_IMAGES", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  type Address {
    id: ID! @id
    street: String!
    city: String!
    state: String!
    zip: Int!
    isPrimary: Boolean @default(value: false)
    owner: Hobbyist! @relationship(type: "HAS_ADDRESSES", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  union ReviewableEntity = Shop | Livestock

  type Review {
    id: ID! @id
    text: String!
    reviewer: Hobbyist! @relationship(type: "REVIEWED_BY", direction: IN)
    itemReviewed: ReviewableEntity
      @relationship(type: "REVIEWED_ITEM", direction: IN)
    rating: Int!
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  type Shop {
    id: ID! @id
    owner: Hobbyist! @relationship(type: "OWNS_SHOP", direction: IN)
    name: String!
    rating: Float @default(value: 0.0)
    sellsLivestock: [Livestock!]!
      @relationship(type: "SELLS_LIVESTOCK", direction: OUT)
    locatesAt: Address @relationship(type: "LOCATES_AT", direction: OUT)
    hasReviews: [Review!]! @relationship(type: "HAS_REVIEWS", direction: OUT)
    hasLikes: [Like!]! @relationship(type: "LIKABLE_ITEM", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }

  union LikableEntity = Livestock | Shop

  type Like {
    id: ID! @id
    liker: Hobbyist! @relationship(type: "LIKES", direction: IN)
    likeTarget: LikableEntity!
      @relationship(type: "LIKABLE_ITEM", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [CREATE, UPDATE])
  }
`

export default typeDefs
