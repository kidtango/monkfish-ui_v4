import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  timetz: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "bookmarks" */
export type Bookmarks = {
  __typename?: 'bookmarks';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** An object relationship */
  post_bookmark: Posts;
  post_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user_bookmark: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "bookmarks" */
export type Bookmarks_Aggregate = {
  __typename?: 'bookmarks_aggregate';
  aggregate?: Maybe<Bookmarks_Aggregate_Fields>;
  nodes: Array<Bookmarks>;
};

/** aggregate fields of "bookmarks" */
export type Bookmarks_Aggregate_Fields = {
  __typename?: 'bookmarks_aggregate_fields';
  avg?: Maybe<Bookmarks_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Bookmarks_Max_Fields>;
  min?: Maybe<Bookmarks_Min_Fields>;
  stddev?: Maybe<Bookmarks_Stddev_Fields>;
  stddev_pop?: Maybe<Bookmarks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bookmarks_Stddev_Samp_Fields>;
  sum?: Maybe<Bookmarks_Sum_Fields>;
  var_pop?: Maybe<Bookmarks_Var_Pop_Fields>;
  var_samp?: Maybe<Bookmarks_Var_Samp_Fields>;
  variance?: Maybe<Bookmarks_Variance_Fields>;
};


/** aggregate fields of "bookmarks" */
export type Bookmarks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookmarks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bookmarks" */
export type Bookmarks_Aggregate_Order_By = {
  avg?: Maybe<Bookmarks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Bookmarks_Max_Order_By>;
  min?: Maybe<Bookmarks_Min_Order_By>;
  stddev?: Maybe<Bookmarks_Stddev_Order_By>;
  stddev_pop?: Maybe<Bookmarks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Bookmarks_Stddev_Samp_Order_By>;
  sum?: Maybe<Bookmarks_Sum_Order_By>;
  var_pop?: Maybe<Bookmarks_Var_Pop_Order_By>;
  var_samp?: Maybe<Bookmarks_Var_Samp_Order_By>;
  variance?: Maybe<Bookmarks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bookmarks" */
export type Bookmarks_Arr_Rel_Insert_Input = {
  data: Array<Bookmarks_Insert_Input>;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};

/** aggregate avg on columns */
export type Bookmarks_Avg_Fields = {
  __typename?: 'bookmarks_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bookmarks" */
export type Bookmarks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bookmarks". All fields are combined with a logical 'AND'. */
export type Bookmarks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookmarks_Bool_Exp>>>;
  _not?: Maybe<Bookmarks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Bookmarks_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post_bookmark?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_bookmark?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bookmarks" */
export enum Bookmarks_Constraint {
  /** unique or primary key constraint */
  BookmarksPkey = 'bookmarks_pkey'
}

/** input type for incrementing integer column in table "bookmarks" */
export type Bookmarks_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "bookmarks" */
export type Bookmarks_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_bookmark?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_bookmark?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Bookmarks_Max_Fields = {
  __typename?: 'bookmarks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "bookmarks" */
export type Bookmarks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Bookmarks_Min_Fields = {
  __typename?: 'bookmarks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "bookmarks" */
export type Bookmarks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "bookmarks" */
export type Bookmarks_Mutation_Response = {
  __typename?: 'bookmarks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Bookmarks>;
};

/** input type for inserting object relation for remote table "bookmarks" */
export type Bookmarks_Obj_Rel_Insert_Input = {
  data: Bookmarks_Insert_Input;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};

/** on conflict condition type for table "bookmarks" */
export type Bookmarks_On_Conflict = {
  constraint: Bookmarks_Constraint;
  update_columns: Array<Bookmarks_Update_Column>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** ordering options when selecting data from "bookmarks" */
export type Bookmarks_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_bookmark?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_bookmark?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "bookmarks" */
export type Bookmarks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "bookmarks" */
export enum Bookmarks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "bookmarks" */
export type Bookmarks_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Bookmarks_Stddev_Fields = {
  __typename?: 'bookmarks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bookmarks_Stddev_Pop_Fields = {
  __typename?: 'bookmarks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bookmarks_Stddev_Samp_Fields = {
  __typename?: 'bookmarks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Bookmarks_Sum_Fields = {
  __typename?: 'bookmarks_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bookmarks" */
export type Bookmarks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "bookmarks" */
export enum Bookmarks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Bookmarks_Var_Pop_Fields = {
  __typename?: 'bookmarks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bookmarks" */
export type Bookmarks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bookmarks_Var_Samp_Fields = {
  __typename?: 'bookmarks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bookmarks" */
export type Bookmarks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Bookmarks_Variance_Fields = {
  __typename?: 'bookmarks_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bookmarks" */
export type Bookmarks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "followers" */
export type Followers = {
  __typename?: 'followers';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower_id: Scalars['String'];
  id: Scalars['Int'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "followers" */
export type Followers_Aggregate = {
  __typename?: 'followers_aggregate';
  aggregate?: Maybe<Followers_Aggregate_Fields>;
  nodes: Array<Followers>;
};

/** aggregate fields of "followers" */
export type Followers_Aggregate_Fields = {
  __typename?: 'followers_aggregate_fields';
  avg?: Maybe<Followers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followers_Max_Fields>;
  min?: Maybe<Followers_Min_Fields>;
  stddev?: Maybe<Followers_Stddev_Fields>;
  stddev_pop?: Maybe<Followers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Followers_Stddev_Samp_Fields>;
  sum?: Maybe<Followers_Sum_Fields>;
  var_pop?: Maybe<Followers_Var_Pop_Fields>;
  var_samp?: Maybe<Followers_Var_Samp_Fields>;
  variance?: Maybe<Followers_Variance_Fields>;
};


/** aggregate fields of "followers" */
export type Followers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "followers" */
export type Followers_Aggregate_Order_By = {
  avg?: Maybe<Followers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Followers_Max_Order_By>;
  min?: Maybe<Followers_Min_Order_By>;
  stddev?: Maybe<Followers_Stddev_Order_By>;
  stddev_pop?: Maybe<Followers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Followers_Stddev_Samp_Order_By>;
  sum?: Maybe<Followers_Sum_Order_By>;
  var_pop?: Maybe<Followers_Var_Pop_Order_By>;
  var_samp?: Maybe<Followers_Var_Samp_Order_By>;
  variance?: Maybe<Followers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "followers" */
export type Followers_Arr_Rel_Insert_Input = {
  data: Array<Followers_Insert_Input>;
  on_conflict?: Maybe<Followers_On_Conflict>;
};

/** aggregate avg on columns */
export type Followers_Avg_Fields = {
  __typename?: 'followers_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "followers" */
export type Followers_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "followers". All fields are combined with a logical 'AND'. */
export type Followers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Followers_Bool_Exp>>>;
  _not?: Maybe<Followers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Followers_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  follower_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "followers" */
export enum Followers_Constraint {
  /** unique or primary key constraint */
  FollowersFollowerIdKey = 'followers_follower_id_key',
  /** unique or primary key constraint */
  FollowersIdKey = 'followers_id_key',
  /** unique or primary key constraint */
  FollowersPkey = 'followers_pkey',
  /** unique or primary key constraint */
  FollowersUserIdKey = 'followers_user_id_key'
}

/** input type for incrementing integer column in table "followers" */
export type Followers_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "followers" */
export type Followers_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  follower_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Followers_Max_Fields = {
  __typename?: 'followers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "followers" */
export type Followers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  follower_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Followers_Min_Fields = {
  __typename?: 'followers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  follower_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "followers" */
export type Followers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  follower_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "followers" */
export type Followers_Mutation_Response = {
  __typename?: 'followers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Followers>;
};

/** input type for inserting object relation for remote table "followers" */
export type Followers_Obj_Rel_Insert_Input = {
  data: Followers_Insert_Input;
  on_conflict?: Maybe<Followers_On_Conflict>;
};

/** on conflict condition type for table "followers" */
export type Followers_On_Conflict = {
  constraint: Followers_Constraint;
  update_columns: Array<Followers_Update_Column>;
  where?: Maybe<Followers_Bool_Exp>;
};

/** ordering options when selecting data from "followers" */
export type Followers_Order_By = {
  created_at?: Maybe<Order_By>;
  follower_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "followers" */
export type Followers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "followers" */
export enum Followers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "followers" */
export type Followers_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  follower_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Followers_Stddev_Fields = {
  __typename?: 'followers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "followers" */
export type Followers_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Followers_Stddev_Pop_Fields = {
  __typename?: 'followers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "followers" */
export type Followers_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Followers_Stddev_Samp_Fields = {
  __typename?: 'followers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "followers" */
export type Followers_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Followers_Sum_Fields = {
  __typename?: 'followers_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "followers" */
export type Followers_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "followers" */
export enum Followers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowerId = 'follower_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Followers_Var_Pop_Fields = {
  __typename?: 'followers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "followers" */
export type Followers_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Followers_Var_Samp_Fields = {
  __typename?: 'followers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "followers" */
export type Followers_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Followers_Variance_Fields = {
  __typename?: 'followers_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "followers" */
export type Followers_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/**
 * following user
 *
 *
 * columns and relationships of "followings"
 */
export type Followings = {
  __typename?: 'followings';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id: Scalars['String'];
  id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "followings" */
export type Followings_Aggregate = {
  __typename?: 'followings_aggregate';
  aggregate?: Maybe<Followings_Aggregate_Fields>;
  nodes: Array<Followings>;
};

/** aggregate fields of "followings" */
export type Followings_Aggregate_Fields = {
  __typename?: 'followings_aggregate_fields';
  avg?: Maybe<Followings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Followings_Max_Fields>;
  min?: Maybe<Followings_Min_Fields>;
  stddev?: Maybe<Followings_Stddev_Fields>;
  stddev_pop?: Maybe<Followings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Followings_Stddev_Samp_Fields>;
  sum?: Maybe<Followings_Sum_Fields>;
  var_pop?: Maybe<Followings_Var_Pop_Fields>;
  var_samp?: Maybe<Followings_Var_Samp_Fields>;
  variance?: Maybe<Followings_Variance_Fields>;
};


/** aggregate fields of "followings" */
export type Followings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Followings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "followings" */
export type Followings_Aggregate_Order_By = {
  avg?: Maybe<Followings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Followings_Max_Order_By>;
  min?: Maybe<Followings_Min_Order_By>;
  stddev?: Maybe<Followings_Stddev_Order_By>;
  stddev_pop?: Maybe<Followings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Followings_Stddev_Samp_Order_By>;
  sum?: Maybe<Followings_Sum_Order_By>;
  var_pop?: Maybe<Followings_Var_Pop_Order_By>;
  var_samp?: Maybe<Followings_Var_Samp_Order_By>;
  variance?: Maybe<Followings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "followings" */
export type Followings_Arr_Rel_Insert_Input = {
  data: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** aggregate avg on columns */
export type Followings_Avg_Fields = {
  __typename?: 'followings_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "followings" */
export type Followings_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "followings". All fields are combined with a logical 'AND'. */
export type Followings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  _not?: Maybe<Followings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Followings_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  following_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "followings" */
export enum Followings_Constraint {
  /** unique or primary key constraint */
  FollowingsFollowingIdKey = 'followings_following_id_key',
  /** unique or primary key constraint */
  FollowingsIdKey = 'followings_id_key',
  /** unique or primary key constraint */
  FollowingsPkey = 'followings_pkey',
  /** unique or primary key constraint */
  FollowingsUserIdKey = 'followings_user_id_key'
}

/** input type for incrementing integer column in table "followings" */
export type Followings_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "followings" */
export type Followings_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Followings_Max_Fields = {
  __typename?: 'followings_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "followings" */
export type Followings_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Followings_Min_Fields = {
  __typename?: 'followings_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "followings" */
export type Followings_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "followings" */
export type Followings_Mutation_Response = {
  __typename?: 'followings_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Followings>;
};

/** input type for inserting object relation for remote table "followings" */
export type Followings_Obj_Rel_Insert_Input = {
  data: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};

/** on conflict condition type for table "followings" */
export type Followings_On_Conflict = {
  constraint: Followings_Constraint;
  update_columns: Array<Followings_Update_Column>;
  where?: Maybe<Followings_Bool_Exp>;
};

/** ordering options when selecting data from "followings" */
export type Followings_Order_By = {
  created_at?: Maybe<Order_By>;
  following_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "followings" */
export type Followings_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "followings" */
export enum Followings_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "followings" */
export type Followings_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Followings_Stddev_Fields = {
  __typename?: 'followings_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "followings" */
export type Followings_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Followings_Stddev_Pop_Fields = {
  __typename?: 'followings_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "followings" */
export type Followings_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Followings_Stddev_Samp_Fields = {
  __typename?: 'followings_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "followings" */
export type Followings_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Followings_Sum_Fields = {
  __typename?: 'followings_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "followings" */
export type Followings_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "followings" */
export enum Followings_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FollowingId = 'following_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Followings_Var_Pop_Fields = {
  __typename?: 'followings_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "followings" */
export type Followings_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Followings_Var_Samp_Fields = {
  __typename?: 'followings_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "followings" */
export type Followings_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Followings_Variance_Fields = {
  __typename?: 'followings_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "followings" */
export type Followings_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "livestock_likes" */
export type Livestock_Likes = {
  __typename?: 'livestock_likes';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  livestock_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "livestock_likes" */
export type Livestock_Likes_Aggregate = {
  __typename?: 'livestock_likes_aggregate';
  aggregate?: Maybe<Livestock_Likes_Aggregate_Fields>;
  nodes: Array<Livestock_Likes>;
};

/** aggregate fields of "livestock_likes" */
export type Livestock_Likes_Aggregate_Fields = {
  __typename?: 'livestock_likes_aggregate_fields';
  avg?: Maybe<Livestock_Likes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Livestock_Likes_Max_Fields>;
  min?: Maybe<Livestock_Likes_Min_Fields>;
  stddev?: Maybe<Livestock_Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Livestock_Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Livestock_Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Livestock_Likes_Sum_Fields>;
  var_pop?: Maybe<Livestock_Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Livestock_Likes_Var_Samp_Fields>;
  variance?: Maybe<Livestock_Likes_Variance_Fields>;
};


/** aggregate fields of "livestock_likes" */
export type Livestock_Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Livestock_Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "livestock_likes" */
export type Livestock_Likes_Aggregate_Order_By = {
  avg?: Maybe<Livestock_Likes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Livestock_Likes_Max_Order_By>;
  min?: Maybe<Livestock_Likes_Min_Order_By>;
  stddev?: Maybe<Livestock_Likes_Stddev_Order_By>;
  stddev_pop?: Maybe<Livestock_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Livestock_Likes_Stddev_Samp_Order_By>;
  sum?: Maybe<Livestock_Likes_Sum_Order_By>;
  var_pop?: Maybe<Livestock_Likes_Var_Pop_Order_By>;
  var_samp?: Maybe<Livestock_Likes_Var_Samp_Order_By>;
  variance?: Maybe<Livestock_Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "livestock_likes" */
export type Livestock_Likes_Arr_Rel_Insert_Input = {
  data: Array<Livestock_Likes_Insert_Input>;
  on_conflict?: Maybe<Livestock_Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Livestock_Likes_Avg_Fields = {
  __typename?: 'livestock_likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "livestock_likes" */
export type Livestock_Likes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "livestock_likes". All fields are combined with a logical 'AND'. */
export type Livestock_Likes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Livestock_Likes_Bool_Exp>>>;
  _not?: Maybe<Livestock_Likes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Livestock_Likes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  livestock_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "livestock_likes" */
export enum Livestock_Likes_Constraint {
  /** unique or primary key constraint */
  LivestockLikesPkey = 'livestock_likes_pkey'
}

/** input type for incrementing integer column in table "livestock_likes" */
export type Livestock_Likes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "livestock_likes" */
export type Livestock_Likes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Livestock_Likes_Max_Fields = {
  __typename?: 'livestock_likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "livestock_likes" */
export type Livestock_Likes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Livestock_Likes_Min_Fields = {
  __typename?: 'livestock_likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "livestock_likes" */
export type Livestock_Likes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "livestock_likes" */
export type Livestock_Likes_Mutation_Response = {
  __typename?: 'livestock_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Livestock_Likes>;
};

/** input type for inserting object relation for remote table "livestock_likes" */
export type Livestock_Likes_Obj_Rel_Insert_Input = {
  data: Livestock_Likes_Insert_Input;
  on_conflict?: Maybe<Livestock_Likes_On_Conflict>;
};

/** on conflict condition type for table "livestock_likes" */
export type Livestock_Likes_On_Conflict = {
  constraint: Livestock_Likes_Constraint;
  update_columns: Array<Livestock_Likes_Update_Column>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};

/** ordering options when selecting data from "livestock_likes" */
export type Livestock_Likes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "livestock_likes" */
export type Livestock_Likes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "livestock_likes" */
export enum Livestock_Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LivestockId = 'livestock_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "livestock_likes" */
export type Livestock_Likes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Livestock_Likes_Stddev_Fields = {
  __typename?: 'livestock_likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "livestock_likes" */
export type Livestock_Likes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Livestock_Likes_Stddev_Pop_Fields = {
  __typename?: 'livestock_likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "livestock_likes" */
export type Livestock_Likes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Livestock_Likes_Stddev_Samp_Fields = {
  __typename?: 'livestock_likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "livestock_likes" */
export type Livestock_Likes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Livestock_Likes_Sum_Fields = {
  __typename?: 'livestock_likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  livestock_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "livestock_likes" */
export type Livestock_Likes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** update columns of table "livestock_likes" */
export enum Livestock_Likes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LivestockId = 'livestock_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Livestock_Likes_Var_Pop_Fields = {
  __typename?: 'livestock_likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "livestock_likes" */
export type Livestock_Likes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Livestock_Likes_Var_Samp_Fields = {
  __typename?: 'livestock_likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "livestock_likes" */
export type Livestock_Likes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Livestock_Likes_Variance_Fields = {
  __typename?: 'livestock_likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  livestock_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "livestock_likes" */
export type Livestock_Likes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  livestock_id?: Maybe<Order_By>;
};

/** columns and relationships of "livestocks" */
export type Livestocks = {
  __typename?: 'livestocks';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  likes: Scalars['Int'];
  /** An array relationship */
  livestock_likes: Array<Livestock_Likes>;
  /** An aggregated array relationship */
  livestock_likes_aggregate: Livestock_Likes_Aggregate;
  name: Scalars['String'];
  seller_id: Scalars['String'];
  species: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  water_type: Scalars['String'];
};


/** columns and relationships of "livestocks" */
export type LivestocksLivestock_LikesArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** columns and relationships of "livestocks" */
export type LivestocksLivestock_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};

/** aggregated selection of "livestocks" */
export type Livestocks_Aggregate = {
  __typename?: 'livestocks_aggregate';
  aggregate?: Maybe<Livestocks_Aggregate_Fields>;
  nodes: Array<Livestocks>;
};

/** aggregate fields of "livestocks" */
export type Livestocks_Aggregate_Fields = {
  __typename?: 'livestocks_aggregate_fields';
  avg?: Maybe<Livestocks_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Livestocks_Max_Fields>;
  min?: Maybe<Livestocks_Min_Fields>;
  stddev?: Maybe<Livestocks_Stddev_Fields>;
  stddev_pop?: Maybe<Livestocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Livestocks_Stddev_Samp_Fields>;
  sum?: Maybe<Livestocks_Sum_Fields>;
  var_pop?: Maybe<Livestocks_Var_Pop_Fields>;
  var_samp?: Maybe<Livestocks_Var_Samp_Fields>;
  variance?: Maybe<Livestocks_Variance_Fields>;
};


/** aggregate fields of "livestocks" */
export type Livestocks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Livestocks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "livestocks" */
export type Livestocks_Aggregate_Order_By = {
  avg?: Maybe<Livestocks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Livestocks_Max_Order_By>;
  min?: Maybe<Livestocks_Min_Order_By>;
  stddev?: Maybe<Livestocks_Stddev_Order_By>;
  stddev_pop?: Maybe<Livestocks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Livestocks_Stddev_Samp_Order_By>;
  sum?: Maybe<Livestocks_Sum_Order_By>;
  var_pop?: Maybe<Livestocks_Var_Pop_Order_By>;
  var_samp?: Maybe<Livestocks_Var_Samp_Order_By>;
  variance?: Maybe<Livestocks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "livestocks" */
export type Livestocks_Arr_Rel_Insert_Input = {
  data: Array<Livestocks_Insert_Input>;
  on_conflict?: Maybe<Livestocks_On_Conflict>;
};

/** aggregate avg on columns */
export type Livestocks_Avg_Fields = {
  __typename?: 'livestocks_avg_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "livestocks" */
export type Livestocks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "livestocks". All fields are combined with a logical 'AND'. */
export type Livestocks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Livestocks_Bool_Exp>>>;
  _not?: Maybe<Livestocks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Livestocks_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  likes?: Maybe<Int_Comparison_Exp>;
  livestock_likes?: Maybe<Livestock_Likes_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  seller_id?: Maybe<String_Comparison_Exp>;
  species?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  water_type?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "livestocks" */
export enum Livestocks_Constraint {
  /** unique or primary key constraint */
  LivestocksPkey = 'livestocks_pkey'
}

/** input type for incrementing integer column in table "livestocks" */
export type Livestocks_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "livestocks" */
export type Livestocks_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  livestock_likes?: Maybe<Livestock_Likes_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  water_type?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Livestocks_Max_Fields = {
  __typename?: 'livestocks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  water_type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "livestocks" */
export type Livestocks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seller_id?: Maybe<Order_By>;
  species?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  water_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Livestocks_Min_Fields = {
  __typename?: 'livestocks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  water_type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "livestocks" */
export type Livestocks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seller_id?: Maybe<Order_By>;
  species?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  water_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "livestocks" */
export type Livestocks_Mutation_Response = {
  __typename?: 'livestocks_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Livestocks>;
};

/** input type for inserting object relation for remote table "livestocks" */
export type Livestocks_Obj_Rel_Insert_Input = {
  data: Livestocks_Insert_Input;
  on_conflict?: Maybe<Livestocks_On_Conflict>;
};

/** on conflict condition type for table "livestocks" */
export type Livestocks_On_Conflict = {
  constraint: Livestocks_Constraint;
  update_columns: Array<Livestocks_Update_Column>;
  where?: Maybe<Livestocks_Bool_Exp>;
};

/** ordering options when selecting data from "livestocks" */
export type Livestocks_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  livestock_likes_aggregate?: Maybe<Livestock_Likes_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  seller_id?: Maybe<Order_By>;
  species?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  water_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "livestocks" */
export type Livestocks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "livestocks" */
export enum Livestocks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  SellerId = 'seller_id',
  /** column name */
  Species = 'species',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WaterType = 'water_type'
}

/** input type for updating data in table "livestocks" */
export type Livestocks_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seller_id?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  water_type?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Livestocks_Stddev_Fields = {
  __typename?: 'livestocks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "livestocks" */
export type Livestocks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Livestocks_Stddev_Pop_Fields = {
  __typename?: 'livestocks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "livestocks" */
export type Livestocks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Livestocks_Stddev_Samp_Fields = {
  __typename?: 'livestocks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "livestocks" */
export type Livestocks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Livestocks_Sum_Fields = {
  __typename?: 'livestocks_sum_fields';
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "livestocks" */
export type Livestocks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** update columns of table "livestocks" */
export enum Livestocks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  SellerId = 'seller_id',
  /** column name */
  Species = 'species',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WaterType = 'water_type'
}

/** aggregate var_pop on columns */
export type Livestocks_Var_Pop_Fields = {
  __typename?: 'livestocks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "livestocks" */
export type Livestocks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Livestocks_Var_Samp_Fields = {
  __typename?: 'livestocks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "livestocks" */
export type Livestocks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Livestocks_Variance_Fields = {
  __typename?: 'livestocks_variance_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "livestocks" */
export type Livestocks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bookmarks" */
  delete_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** delete single row from the table: "bookmarks" */
  delete_bookmarks_by_pk?: Maybe<Bookmarks>;
  /** delete data from the table: "followers" */
  delete_followers?: Maybe<Followers_Mutation_Response>;
  /** delete single row from the table: "followers" */
  delete_followers_by_pk?: Maybe<Followers>;
  /** delete data from the table: "followings" */
  delete_followings?: Maybe<Followings_Mutation_Response>;
  /** delete single row from the table: "followings" */
  delete_followings_by_pk?: Maybe<Followings>;
  /** delete data from the table: "livestock_likes" */
  delete_livestock_likes?: Maybe<Livestock_Likes_Mutation_Response>;
  /** delete single row from the table: "livestock_likes" */
  delete_livestock_likes_by_pk?: Maybe<Livestock_Likes>;
  /** delete data from the table: "livestocks" */
  delete_livestocks?: Maybe<Livestocks_Mutation_Response>;
  /** delete single row from the table: "livestocks" */
  delete_livestocks_by_pk?: Maybe<Livestocks>;
  /** delete data from the table: "online_users" */
  delete_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** delete data from the table: "post_comment_likes" */
  delete_post_comment_likes?: Maybe<Post_Comment_Likes_Mutation_Response>;
  /** delete single row from the table: "post_comment_likes" */
  delete_post_comment_likes_by_pk?: Maybe<Post_Comment_Likes>;
  /** delete data from the table: "post_comment_replies" */
  delete_post_comment_replies?: Maybe<Post_Comment_Replies_Mutation_Response>;
  /** delete single row from the table: "post_comment_replies" */
  delete_post_comment_replies_by_pk?: Maybe<Post_Comment_Replies>;
  /** delete data from the table: "post_comments" */
  delete_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** delete single row from the table: "post_comments" */
  delete_post_comments_by_pk?: Maybe<Post_Comments>;
  /** delete data from the table: "post_likes" */
  delete_post_likes?: Maybe<Post_Likes_Mutation_Response>;
  /** delete single row from the table: "post_likes" */
  delete_post_likes_by_pk?: Maybe<Post_Likes>;
  /** delete data from the table: "post_tag" */
  delete_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** delete single row from the table: "post_tag" */
  delete_post_tag_by_pk?: Maybe<Post_Tag>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "bookmarks" */
  insert_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** insert a single row into the table: "bookmarks" */
  insert_bookmarks_one?: Maybe<Bookmarks>;
  /** insert data into the table: "followers" */
  insert_followers?: Maybe<Followers_Mutation_Response>;
  /** insert a single row into the table: "followers" */
  insert_followers_one?: Maybe<Followers>;
  /** insert data into the table: "followings" */
  insert_followings?: Maybe<Followings_Mutation_Response>;
  /** insert a single row into the table: "followings" */
  insert_followings_one?: Maybe<Followings>;
  /** insert data into the table: "livestock_likes" */
  insert_livestock_likes?: Maybe<Livestock_Likes_Mutation_Response>;
  /** insert a single row into the table: "livestock_likes" */
  insert_livestock_likes_one?: Maybe<Livestock_Likes>;
  /** insert data into the table: "livestocks" */
  insert_livestocks?: Maybe<Livestocks_Mutation_Response>;
  /** insert a single row into the table: "livestocks" */
  insert_livestocks_one?: Maybe<Livestocks>;
  /** insert data into the table: "online_users" */
  insert_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** insert a single row into the table: "online_users" */
  insert_online_users_one?: Maybe<Online_Users>;
  /** insert data into the table: "post_comment_likes" */
  insert_post_comment_likes?: Maybe<Post_Comment_Likes_Mutation_Response>;
  /** insert a single row into the table: "post_comment_likes" */
  insert_post_comment_likes_one?: Maybe<Post_Comment_Likes>;
  /** insert data into the table: "post_comment_replies" */
  insert_post_comment_replies?: Maybe<Post_Comment_Replies_Mutation_Response>;
  /** insert a single row into the table: "post_comment_replies" */
  insert_post_comment_replies_one?: Maybe<Post_Comment_Replies>;
  /** insert data into the table: "post_comments" */
  insert_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** insert a single row into the table: "post_comments" */
  insert_post_comments_one?: Maybe<Post_Comments>;
  /** insert data into the table: "post_likes" */
  insert_post_likes?: Maybe<Post_Likes_Mutation_Response>;
  /** insert a single row into the table: "post_likes" */
  insert_post_likes_one?: Maybe<Post_Likes>;
  /** insert data into the table: "post_tag" */
  insert_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** insert a single row into the table: "post_tag" */
  insert_post_tag_one?: Maybe<Post_Tag>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "bookmarks" */
  update_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** update single row of the table: "bookmarks" */
  update_bookmarks_by_pk?: Maybe<Bookmarks>;
  /** update data of the table: "followers" */
  update_followers?: Maybe<Followers_Mutation_Response>;
  /** update single row of the table: "followers" */
  update_followers_by_pk?: Maybe<Followers>;
  /** update data of the table: "followings" */
  update_followings?: Maybe<Followings_Mutation_Response>;
  /** update single row of the table: "followings" */
  update_followings_by_pk?: Maybe<Followings>;
  /** update data of the table: "livestock_likes" */
  update_livestock_likes?: Maybe<Livestock_Likes_Mutation_Response>;
  /** update single row of the table: "livestock_likes" */
  update_livestock_likes_by_pk?: Maybe<Livestock_Likes>;
  /** update data of the table: "livestocks" */
  update_livestocks?: Maybe<Livestocks_Mutation_Response>;
  /** update single row of the table: "livestocks" */
  update_livestocks_by_pk?: Maybe<Livestocks>;
  /** update data of the table: "online_users" */
  update_online_users?: Maybe<Online_Users_Mutation_Response>;
  /** update data of the table: "post_comment_likes" */
  update_post_comment_likes?: Maybe<Post_Comment_Likes_Mutation_Response>;
  /** update single row of the table: "post_comment_likes" */
  update_post_comment_likes_by_pk?: Maybe<Post_Comment_Likes>;
  /** update data of the table: "post_comment_replies" */
  update_post_comment_replies?: Maybe<Post_Comment_Replies_Mutation_Response>;
  /** update single row of the table: "post_comment_replies" */
  update_post_comment_replies_by_pk?: Maybe<Post_Comment_Replies>;
  /** update data of the table: "post_comments" */
  update_post_comments?: Maybe<Post_Comments_Mutation_Response>;
  /** update single row of the table: "post_comments" */
  update_post_comments_by_pk?: Maybe<Post_Comments>;
  /** update data of the table: "post_likes" */
  update_post_likes?: Maybe<Post_Likes_Mutation_Response>;
  /** update single row of the table: "post_likes" */
  update_post_likes_by_pk?: Maybe<Post_Likes>;
  /** update data of the table: "post_tag" */
  update_post_tag?: Maybe<Post_Tag_Mutation_Response>;
  /** update single row of the table: "post_tag" */
  update_post_tag_by_pk?: Maybe<Post_Tag>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_BookmarksArgs = {
  where: Bookmarks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bookmarks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FollowersArgs = {
  where: Followers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Followers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FollowingsArgs = {
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Followings_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Livestock_LikesArgs = {
  where: Livestock_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Livestock_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LivestocksArgs = {
  where: Livestocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Livestocks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Online_UsersArgs = {
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Comment_LikesArgs = {
  where: Post_Comment_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Comment_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_Comment_RepliesArgs = {
  where: Post_Comment_Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Comment_Replies_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_CommentsArgs = {
  where: Post_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Post_LikesArgs = {
  where: Post_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Likes_By_PkArgs = {
  post_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Post_TagArgs = {
  where: Post_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Post_Tag_By_PkArgs = {
  post_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_BookmarksArgs = {
  objects: Array<Bookmarks_Insert_Input>;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bookmarks_OneArgs = {
  object: Bookmarks_Insert_Input;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowersArgs = {
  objects: Array<Followers_Insert_Input>;
  on_conflict?: Maybe<Followers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Followers_OneArgs = {
  object: Followers_Insert_Input;
  on_conflict?: Maybe<Followers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FollowingsArgs = {
  objects: Array<Followings_Insert_Input>;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Followings_OneArgs = {
  object: Followings_Insert_Input;
  on_conflict?: Maybe<Followings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Livestock_LikesArgs = {
  objects: Array<Livestock_Likes_Insert_Input>;
  on_conflict?: Maybe<Livestock_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Livestock_Likes_OneArgs = {
  object: Livestock_Likes_Insert_Input;
  on_conflict?: Maybe<Livestock_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LivestocksArgs = {
  objects: Array<Livestocks_Insert_Input>;
  on_conflict?: Maybe<Livestocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Livestocks_OneArgs = {
  object: Livestocks_Insert_Input;
  on_conflict?: Maybe<Livestocks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Online_UsersArgs = {
  objects: Array<Online_Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Online_Users_OneArgs = {
  object: Online_Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Post_Comment_LikesArgs = {
  objects: Array<Post_Comment_Likes_Insert_Input>;
  on_conflict?: Maybe<Post_Comment_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Comment_Likes_OneArgs = {
  object: Post_Comment_Likes_Insert_Input;
  on_conflict?: Maybe<Post_Comment_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Comment_RepliesArgs = {
  objects: Array<Post_Comment_Replies_Insert_Input>;
  on_conflict?: Maybe<Post_Comment_Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Comment_Replies_OneArgs = {
  object: Post_Comment_Replies_Insert_Input;
  on_conflict?: Maybe<Post_Comment_Replies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_CommentsArgs = {
  objects: Array<Post_Comments_Insert_Input>;
  on_conflict?: Maybe<Post_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Comments_OneArgs = {
  object: Post_Comments_Insert_Input;
  on_conflict?: Maybe<Post_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_LikesArgs = {
  objects: Array<Post_Likes_Insert_Input>;
  on_conflict?: Maybe<Post_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Likes_OneArgs = {
  object: Post_Likes_Insert_Input;
  on_conflict?: Maybe<Post_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_TagArgs = {
  objects: Array<Post_Tag_Insert_Input>;
  on_conflict?: Maybe<Post_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Post_Tag_OneArgs = {
  object: Post_Tag_Insert_Input;
  on_conflict?: Maybe<Post_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BookmarksArgs = {
  _inc?: Maybe<Bookmarks_Inc_Input>;
  _set?: Maybe<Bookmarks_Set_Input>;
  where: Bookmarks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bookmarks_By_PkArgs = {
  _inc?: Maybe<Bookmarks_Inc_Input>;
  _set?: Maybe<Bookmarks_Set_Input>;
  pk_columns: Bookmarks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FollowersArgs = {
  _inc?: Maybe<Followers_Inc_Input>;
  _set?: Maybe<Followers_Set_Input>;
  where: Followers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Followers_By_PkArgs = {
  _inc?: Maybe<Followers_Inc_Input>;
  _set?: Maybe<Followers_Set_Input>;
  pk_columns: Followers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FollowingsArgs = {
  _inc?: Maybe<Followings_Inc_Input>;
  _set?: Maybe<Followings_Set_Input>;
  where: Followings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Followings_By_PkArgs = {
  _inc?: Maybe<Followings_Inc_Input>;
  _set?: Maybe<Followings_Set_Input>;
  pk_columns: Followings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Livestock_LikesArgs = {
  _inc?: Maybe<Livestock_Likes_Inc_Input>;
  _set?: Maybe<Livestock_Likes_Set_Input>;
  where: Livestock_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Livestock_Likes_By_PkArgs = {
  _inc?: Maybe<Livestock_Likes_Inc_Input>;
  _set?: Maybe<Livestock_Likes_Set_Input>;
  pk_columns: Livestock_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LivestocksArgs = {
  _inc?: Maybe<Livestocks_Inc_Input>;
  _set?: Maybe<Livestocks_Set_Input>;
  where: Livestocks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Livestocks_By_PkArgs = {
  _inc?: Maybe<Livestocks_Inc_Input>;
  _set?: Maybe<Livestocks_Set_Input>;
  pk_columns: Livestocks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Online_UsersArgs = {
  _set?: Maybe<Online_Users_Set_Input>;
  where: Online_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Comment_LikesArgs = {
  _inc?: Maybe<Post_Comment_Likes_Inc_Input>;
  _set?: Maybe<Post_Comment_Likes_Set_Input>;
  where: Post_Comment_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Comment_Likes_By_PkArgs = {
  _inc?: Maybe<Post_Comment_Likes_Inc_Input>;
  _set?: Maybe<Post_Comment_Likes_Set_Input>;
  pk_columns: Post_Comment_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Comment_RepliesArgs = {
  _inc?: Maybe<Post_Comment_Replies_Inc_Input>;
  _set?: Maybe<Post_Comment_Replies_Set_Input>;
  where: Post_Comment_Replies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Comment_Replies_By_PkArgs = {
  _inc?: Maybe<Post_Comment_Replies_Inc_Input>;
  _set?: Maybe<Post_Comment_Replies_Set_Input>;
  pk_columns: Post_Comment_Replies_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_CommentsArgs = {
  _inc?: Maybe<Post_Comments_Inc_Input>;
  _set?: Maybe<Post_Comments_Set_Input>;
  where: Post_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Comments_By_PkArgs = {
  _inc?: Maybe<Post_Comments_Inc_Input>;
  _set?: Maybe<Post_Comments_Set_Input>;
  pk_columns: Post_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_LikesArgs = {
  _inc?: Maybe<Post_Likes_Inc_Input>;
  _set?: Maybe<Post_Likes_Set_Input>;
  where: Post_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Likes_By_PkArgs = {
  _inc?: Maybe<Post_Likes_Inc_Input>;
  _set?: Maybe<Post_Likes_Set_Input>;
  pk_columns: Post_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Post_TagArgs = {
  _inc?: Maybe<Post_Tag_Inc_Input>;
  _set?: Maybe<Post_Tag_Set_Input>;
  where: Post_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Post_Tag_By_PkArgs = {
  _inc?: Maybe<Post_Tag_Inc_Input>;
  _set?: Maybe<Post_Tag_Set_Input>;
  pk_columns: Post_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>;
  _set?: Maybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _inc?: Maybe<Tags_Inc_Input>;
  _set?: Maybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _inc?: Maybe<Tags_Inc_Input>;
  _set?: Maybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "online_users" */
export type Online_Users = {
  __typename?: 'online_users';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "online_users" */
export type Online_Users_Aggregate = {
  __typename?: 'online_users_aggregate';
  aggregate?: Maybe<Online_Users_Aggregate_Fields>;
  nodes: Array<Online_Users>;
};

/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_Fields = {
  __typename?: 'online_users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Online_Users_Max_Fields>;
  min?: Maybe<Online_Users_Min_Fields>;
};


/** aggregate fields of "online_users" */
export type Online_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Online_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "online_users" */
export type Online_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Online_Users_Max_Order_By>;
  min?: Maybe<Online_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "online_users" */
export type Online_Users_Arr_Rel_Insert_Input = {
  data: Array<Online_Users_Insert_Input>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type Online_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  _not?: Maybe<Online_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Online_Users_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "online_users" */
export type Online_Users_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Online_Users_Max_Fields = {
  __typename?: 'online_users_max_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "online_users" */
export type Online_Users_Max_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Online_Users_Min_Fields = {
  __typename?: 'online_users_min_fields';
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "online_users" */
export type Online_Users_Min_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "online_users" */
export type Online_Users_Mutation_Response = {
  __typename?: 'online_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Online_Users>;
};

/** input type for inserting object relation for remote table "online_users" */
export type Online_Users_Obj_Rel_Insert_Input = {
  data: Online_Users_Insert_Input;
};

/** ordering options when selecting data from "online_users" */
export type Online_Users_Order_By = {
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "online_users" */
export enum Online_Users_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "online_users" */
export type Online_Users_Set_Input = {
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "post_comment_likes" */
export type Post_Comment_Likes = {
  __typename?: 'post_comment_likes';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  post_comment_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** aggregated selection of "post_comment_likes" */
export type Post_Comment_Likes_Aggregate = {
  __typename?: 'post_comment_likes_aggregate';
  aggregate?: Maybe<Post_Comment_Likes_Aggregate_Fields>;
  nodes: Array<Post_Comment_Likes>;
};

/** aggregate fields of "post_comment_likes" */
export type Post_Comment_Likes_Aggregate_Fields = {
  __typename?: 'post_comment_likes_aggregate_fields';
  avg?: Maybe<Post_Comment_Likes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Comment_Likes_Max_Fields>;
  min?: Maybe<Post_Comment_Likes_Min_Fields>;
  stddev?: Maybe<Post_Comment_Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Comment_Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Comment_Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Comment_Likes_Sum_Fields>;
  var_pop?: Maybe<Post_Comment_Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Comment_Likes_Var_Samp_Fields>;
  variance?: Maybe<Post_Comment_Likes_Variance_Fields>;
};


/** aggregate fields of "post_comment_likes" */
export type Post_Comment_Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_comment_likes" */
export type Post_Comment_Likes_Aggregate_Order_By = {
  avg?: Maybe<Post_Comment_Likes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Comment_Likes_Max_Order_By>;
  min?: Maybe<Post_Comment_Likes_Min_Order_By>;
  stddev?: Maybe<Post_Comment_Likes_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Comment_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Comment_Likes_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Comment_Likes_Sum_Order_By>;
  var_pop?: Maybe<Post_Comment_Likes_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Comment_Likes_Var_Samp_Order_By>;
  variance?: Maybe<Post_Comment_Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_comment_likes" */
export type Post_Comment_Likes_Arr_Rel_Insert_Input = {
  data: Array<Post_Comment_Likes_Insert_Input>;
  on_conflict?: Maybe<Post_Comment_Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Comment_Likes_Avg_Fields = {
  __typename?: 'post_comment_likes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_comment_likes". All fields are combined with a logical 'AND'. */
export type Post_Comment_Likes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Comment_Likes_Bool_Exp>>>;
  _not?: Maybe<Post_Comment_Likes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Comment_Likes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post_comment_id?: Maybe<Int_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_comment_likes" */
export enum Post_Comment_Likes_Constraint {
  /** unique or primary key constraint */
  LikesCommentPkey = 'likes_comment_pkey'
}

/** input type for incrementing integer column in table "post_comment_likes" */
export type Post_Comment_Likes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_comment_likes" */
export type Post_Comment_Likes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Comment_Likes_Max_Fields = {
  __typename?: 'post_comment_likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Comment_Likes_Min_Fields = {
  __typename?: 'post_comment_likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_comment_likes" */
export type Post_Comment_Likes_Mutation_Response = {
  __typename?: 'post_comment_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Comment_Likes>;
};

/** input type for inserting object relation for remote table "post_comment_likes" */
export type Post_Comment_Likes_Obj_Rel_Insert_Input = {
  data: Post_Comment_Likes_Insert_Input;
  on_conflict?: Maybe<Post_Comment_Likes_On_Conflict>;
};

/** on conflict condition type for table "post_comment_likes" */
export type Post_Comment_Likes_On_Conflict = {
  constraint: Post_Comment_Likes_Constraint;
  update_columns: Array<Post_Comment_Likes_Update_Column>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};

/** ordering options when selecting data from "post_comment_likes" */
export type Post_Comment_Likes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_comment_likes" */
export type Post_Comment_Likes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_comment_likes" */
export enum Post_Comment_Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCommentId = 'post_comment_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "post_comment_likes" */
export type Post_Comment_Likes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Comment_Likes_Stddev_Fields = {
  __typename?: 'post_comment_likes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Comment_Likes_Stddev_Pop_Fields = {
  __typename?: 'post_comment_likes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Comment_Likes_Stddev_Samp_Fields = {
  __typename?: 'post_comment_likes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Comment_Likes_Sum_Fields = {
  __typename?: 'post_comment_likes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** update columns of table "post_comment_likes" */
export enum Post_Comment_Likes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCommentId = 'post_comment_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Post_Comment_Likes_Var_Pop_Fields = {
  __typename?: 'post_comment_likes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Comment_Likes_Var_Samp_Fields = {
  __typename?: 'post_comment_likes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Comment_Likes_Variance_Fields = {
  __typename?: 'post_comment_likes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_comment_likes" */
export type Post_Comment_Likes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/**
 * replies to post comments
 *
 *
 * columns and relationships of "post_comment_replies"
 */
export type Post_Comment_Replies = {
  __typename?: 'post_comment_replies';
  comment_author_id: Scalars['String'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  post_comment_id: Scalars['Int'];
  reply_author_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "post_comment_replies" */
export type Post_Comment_Replies_Aggregate = {
  __typename?: 'post_comment_replies_aggregate';
  aggregate?: Maybe<Post_Comment_Replies_Aggregate_Fields>;
  nodes: Array<Post_Comment_Replies>;
};

/** aggregate fields of "post_comment_replies" */
export type Post_Comment_Replies_Aggregate_Fields = {
  __typename?: 'post_comment_replies_aggregate_fields';
  avg?: Maybe<Post_Comment_Replies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Comment_Replies_Max_Fields>;
  min?: Maybe<Post_Comment_Replies_Min_Fields>;
  stddev?: Maybe<Post_Comment_Replies_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Comment_Replies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Comment_Replies_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Comment_Replies_Sum_Fields>;
  var_pop?: Maybe<Post_Comment_Replies_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Comment_Replies_Var_Samp_Fields>;
  variance?: Maybe<Post_Comment_Replies_Variance_Fields>;
};


/** aggregate fields of "post_comment_replies" */
export type Post_Comment_Replies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Comment_Replies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_comment_replies" */
export type Post_Comment_Replies_Aggregate_Order_By = {
  avg?: Maybe<Post_Comment_Replies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Comment_Replies_Max_Order_By>;
  min?: Maybe<Post_Comment_Replies_Min_Order_By>;
  stddev?: Maybe<Post_Comment_Replies_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Comment_Replies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Comment_Replies_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Comment_Replies_Sum_Order_By>;
  var_pop?: Maybe<Post_Comment_Replies_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Comment_Replies_Var_Samp_Order_By>;
  variance?: Maybe<Post_Comment_Replies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_comment_replies" */
export type Post_Comment_Replies_Arr_Rel_Insert_Input = {
  data: Array<Post_Comment_Replies_Insert_Input>;
  on_conflict?: Maybe<Post_Comment_Replies_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Comment_Replies_Avg_Fields = {
  __typename?: 'post_comment_replies_avg_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Avg_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_comment_replies". All fields are combined with a logical 'AND'. */
export type Post_Comment_Replies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Comment_Replies_Bool_Exp>>>;
  _not?: Maybe<Post_Comment_Replies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Comment_Replies_Bool_Exp>>>;
  comment_author_id?: Maybe<String_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  post_comment_id?: Maybe<Int_Comparison_Exp>;
  reply_author_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_comment_replies" */
export enum Post_Comment_Replies_Constraint {
  /** unique or primary key constraint */
  PostCommentRepliesPkey = 'post_comment_replies_pkey'
}

/** input type for incrementing integer column in table "post_comment_replies" */
export type Post_Comment_Replies_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_comment_replies" */
export type Post_Comment_Replies_Insert_Input = {
  comment_author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  reply_author_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Post_Comment_Replies_Max_Fields = {
  __typename?: 'post_comment_replies_max_fields';
  comment_author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  reply_author_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Max_Order_By = {
  comment_author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  reply_author_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Comment_Replies_Min_Fields = {
  __typename?: 'post_comment_replies_min_fields';
  comment_author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  reply_author_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Min_Order_By = {
  comment_author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  reply_author_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_comment_replies" */
export type Post_Comment_Replies_Mutation_Response = {
  __typename?: 'post_comment_replies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Comment_Replies>;
};

/** input type for inserting object relation for remote table "post_comment_replies" */
export type Post_Comment_Replies_Obj_Rel_Insert_Input = {
  data: Post_Comment_Replies_Insert_Input;
  on_conflict?: Maybe<Post_Comment_Replies_On_Conflict>;
};

/** on conflict condition type for table "post_comment_replies" */
export type Post_Comment_Replies_On_Conflict = {
  constraint: Post_Comment_Replies_Constraint;
  update_columns: Array<Post_Comment_Replies_Update_Column>;
  where?: Maybe<Post_Comment_Replies_Bool_Exp>;
};

/** ordering options when selecting data from "post_comment_replies" */
export type Post_Comment_Replies_Order_By = {
  comment_author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
  reply_author_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_comment_replies" */
export type Post_Comment_Replies_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_comment_replies" */
export enum Post_Comment_Replies_Select_Column {
  /** column name */
  CommentAuthorId = 'comment_author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCommentId = 'post_comment_id',
  /** column name */
  ReplyAuthorId = 'reply_author_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post_comment_replies" */
export type Post_Comment_Replies_Set_Input = {
  comment_author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
  reply_author_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Post_Comment_Replies_Stddev_Fields = {
  __typename?: 'post_comment_replies_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Comment_Replies_Stddev_Pop_Fields = {
  __typename?: 'post_comment_replies_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Comment_Replies_Stddev_Samp_Fields = {
  __typename?: 'post_comment_replies_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Comment_Replies_Sum_Fields = {
  __typename?: 'post_comment_replies_sum_fields';
  id?: Maybe<Scalars['Int']>;
  post_comment_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Sum_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** update columns of table "post_comment_replies" */
export enum Post_Comment_Replies_Update_Column {
  /** column name */
  CommentAuthorId = 'comment_author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PostCommentId = 'post_comment_id',
  /** column name */
  ReplyAuthorId = 'reply_author_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Post_Comment_Replies_Var_Pop_Fields = {
  __typename?: 'post_comment_replies_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Comment_Replies_Var_Samp_Fields = {
  __typename?: 'post_comment_replies_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Comment_Replies_Variance_Fields = {
  __typename?: 'post_comment_replies_variance_fields';
  id?: Maybe<Scalars['Float']>;
  post_comment_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_comment_replies" */
export type Post_Comment_Replies_Variance_Order_By = {
  id?: Maybe<Order_By>;
  post_comment_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_comments" */
export type Post_Comments = {
  __typename?: 'post_comments';
  author_id: Scalars['String'];
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  /** A computed field, executes function "post_comment_liked_by_user" */
  is_comment_liked_by_user?: Maybe<Scalars['Boolean']>;
  likes: Scalars['Int'];
  /** An object relationship */
  post: Posts;
  /** An array relationship */
  post_comment_likes: Array<Post_Comment_Likes>;
  /** An aggregated array relationship */
  post_comment_likes_aggregate: Post_Comment_Likes_Aggregate;
  post_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "post_comments" */
export type Post_CommentsPost_Comment_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};


/** columns and relationships of "post_comments" */
export type Post_CommentsPost_Comment_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};

/** aggregated selection of "post_comments" */
export type Post_Comments_Aggregate = {
  __typename?: 'post_comments_aggregate';
  aggregate?: Maybe<Post_Comments_Aggregate_Fields>;
  nodes: Array<Post_Comments>;
};

/** aggregate fields of "post_comments" */
export type Post_Comments_Aggregate_Fields = {
  __typename?: 'post_comments_aggregate_fields';
  avg?: Maybe<Post_Comments_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Comments_Max_Fields>;
  min?: Maybe<Post_Comments_Min_Fields>;
  stddev?: Maybe<Post_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Comments_Sum_Fields>;
  var_pop?: Maybe<Post_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Comments_Var_Samp_Fields>;
  variance?: Maybe<Post_Comments_Variance_Fields>;
};


/** aggregate fields of "post_comments" */
export type Post_Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_comments" */
export type Post_Comments_Aggregate_Order_By = {
  avg?: Maybe<Post_Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Comments_Max_Order_By>;
  min?: Maybe<Post_Comments_Min_Order_By>;
  stddev?: Maybe<Post_Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Comments_Sum_Order_By>;
  var_pop?: Maybe<Post_Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Comments_Var_Samp_Order_By>;
  variance?: Maybe<Post_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_comments" */
export type Post_Comments_Arr_Rel_Insert_Input = {
  data: Array<Post_Comments_Insert_Input>;
  on_conflict?: Maybe<Post_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Comments_Avg_Fields = {
  __typename?: 'post_comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_comments" */
export type Post_Comments_Avg_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_comments". All fields are combined with a logical 'AND'. */
export type Post_Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Comments_Bool_Exp>>>;
  _not?: Maybe<Post_Comments_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Comments_Bool_Exp>>>;
  author_id?: Maybe<String_Comparison_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  likes?: Maybe<Int_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_comment_likes?: Maybe<Post_Comment_Likes_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "post_comments" */
export enum Post_Comments_Constraint {
  /** unique or primary key constraint */
  CommentsIdKey = 'comments_id_key',
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey'
}

/** input type for incrementing integer column in table "post_comments" */
export type Post_Comments_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_comments" */
export type Post_Comments_Insert_Input = {
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_comment_likes?: Maybe<Post_Comment_Likes_Arr_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Comments_Max_Fields = {
  __typename?: 'post_comments_max_fields';
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post_comments" */
export type Post_Comments_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Comments_Min_Fields = {
  __typename?: 'post_comments_min_fields';
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post_comments" */
export type Post_Comments_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_comments" */
export type Post_Comments_Mutation_Response = {
  __typename?: 'post_comments_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Comments>;
};

/** input type for inserting object relation for remote table "post_comments" */
export type Post_Comments_Obj_Rel_Insert_Input = {
  data: Post_Comments_Insert_Input;
  on_conflict?: Maybe<Post_Comments_On_Conflict>;
};

/** on conflict condition type for table "post_comments" */
export type Post_Comments_On_Conflict = {
  constraint: Post_Comments_Constraint;
  update_columns: Array<Post_Comments_Update_Column>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};

/** ordering options when selecting data from "post_comments" */
export type Post_Comments_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_comment_likes_aggregate?: Maybe<Post_Comment_Likes_Aggregate_Order_By>;
  post_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "post_comments" */
export type Post_Comments_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "post_comments" */
export enum Post_Comments_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Likes = 'likes',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post_comments" */
export type Post_Comments_Set_Input = {
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Post_Comments_Stddev_Fields = {
  __typename?: 'post_comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_comments" */
export type Post_Comments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Comments_Stddev_Pop_Fields = {
  __typename?: 'post_comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_comments" */
export type Post_Comments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Comments_Stddev_Samp_Fields = {
  __typename?: 'post_comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_comments" */
export type Post_Comments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Comments_Sum_Fields = {
  __typename?: 'post_comments_sum_fields';
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_comments" */
export type Post_Comments_Sum_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** update columns of table "post_comments" */
export enum Post_Comments_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Likes = 'likes',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Post_Comments_Var_Pop_Fields = {
  __typename?: 'post_comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_comments" */
export type Post_Comments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Comments_Var_Samp_Fields = {
  __typename?: 'post_comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_comments" */
export type Post_Comments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Comments_Variance_Fields = {
  __typename?: 'post_comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_comments" */
export type Post_Comments_Variance_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_likes" */
export type Post_Likes = {
  __typename?: 'post_likes';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "post_likes" */
export type Post_Likes_Aggregate = {
  __typename?: 'post_likes_aggregate';
  aggregate?: Maybe<Post_Likes_Aggregate_Fields>;
  nodes: Array<Post_Likes>;
};

/** aggregate fields of "post_likes" */
export type Post_Likes_Aggregate_Fields = {
  __typename?: 'post_likes_aggregate_fields';
  avg?: Maybe<Post_Likes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Likes_Max_Fields>;
  min?: Maybe<Post_Likes_Min_Fields>;
  stddev?: Maybe<Post_Likes_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Likes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Likes_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Likes_Sum_Fields>;
  var_pop?: Maybe<Post_Likes_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Likes_Var_Samp_Fields>;
  variance?: Maybe<Post_Likes_Variance_Fields>;
};


/** aggregate fields of "post_likes" */
export type Post_Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_likes" */
export type Post_Likes_Aggregate_Order_By = {
  avg?: Maybe<Post_Likes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Likes_Max_Order_By>;
  min?: Maybe<Post_Likes_Min_Order_By>;
  stddev?: Maybe<Post_Likes_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Likes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Likes_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Likes_Sum_Order_By>;
  var_pop?: Maybe<Post_Likes_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Likes_Var_Samp_Order_By>;
  variance?: Maybe<Post_Likes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_likes" */
export type Post_Likes_Arr_Rel_Insert_Input = {
  data: Array<Post_Likes_Insert_Input>;
  on_conflict?: Maybe<Post_Likes_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Likes_Avg_Fields = {
  __typename?: 'post_likes_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_likes" */
export type Post_Likes_Avg_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_likes". All fields are combined with a logical 'AND'. */
export type Post_Likes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Likes_Bool_Exp>>>;
  _not?: Maybe<Post_Likes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Likes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_likes" */
export enum Post_Likes_Constraint {
  /** unique or primary key constraint */
  PostLikesPkey = 'post_likes_pkey'
}

/** input type for incrementing integer column in table "post_likes" */
export type Post_Likes_Inc_Input = {
  post_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_likes" */
export type Post_Likes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Post_Likes_Max_Fields = {
  __typename?: 'post_likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "post_likes" */
export type Post_Likes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Likes_Min_Fields = {
  __typename?: 'post_likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "post_likes" */
export type Post_Likes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_likes" */
export type Post_Likes_Mutation_Response = {
  __typename?: 'post_likes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Likes>;
};

/** input type for inserting object relation for remote table "post_likes" */
export type Post_Likes_Obj_Rel_Insert_Input = {
  data: Post_Likes_Insert_Input;
  on_conflict?: Maybe<Post_Likes_On_Conflict>;
};

/** on conflict condition type for table "post_likes" */
export type Post_Likes_On_Conflict = {
  constraint: Post_Likes_Constraint;
  update_columns: Array<Post_Likes_Update_Column>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};

/** ordering options when selecting data from "post_likes" */
export type Post_Likes_Order_By = {
  created_at?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_likes" */
export type Post_Likes_Pk_Columns_Input = {
  post_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "post_likes" */
export enum Post_Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "post_likes" */
export type Post_Likes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Post_Likes_Stddev_Fields = {
  __typename?: 'post_likes_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_likes" */
export type Post_Likes_Stddev_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Likes_Stddev_Pop_Fields = {
  __typename?: 'post_likes_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_likes" */
export type Post_Likes_Stddev_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Likes_Stddev_Samp_Fields = {
  __typename?: 'post_likes_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_likes" */
export type Post_Likes_Stddev_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Likes_Sum_Fields = {
  __typename?: 'post_likes_sum_fields';
  post_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_likes" */
export type Post_Likes_Sum_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** update columns of table "post_likes" */
export enum Post_Likes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Post_Likes_Var_Pop_Fields = {
  __typename?: 'post_likes_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_likes" */
export type Post_Likes_Var_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Likes_Var_Samp_Fields = {
  __typename?: 'post_likes_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_likes" */
export type Post_Likes_Var_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Likes_Variance_Fields = {
  __typename?: 'post_likes_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_likes" */
export type Post_Likes_Variance_Order_By = {
  post_id?: Maybe<Order_By>;
};

/** columns and relationships of "post_tag" */
export type Post_Tag = {
  __typename?: 'post_tag';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  post: Posts;
  post_id: Scalars['Int'];
  /** An object relationship */
  tag: Tags;
  tag_id: Scalars['Int'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "post_tag" */
export type Post_Tag_Aggregate = {
  __typename?: 'post_tag_aggregate';
  aggregate?: Maybe<Post_Tag_Aggregate_Fields>;
  nodes: Array<Post_Tag>;
};

/** aggregate fields of "post_tag" */
export type Post_Tag_Aggregate_Fields = {
  __typename?: 'post_tag_aggregate_fields';
  avg?: Maybe<Post_Tag_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Post_Tag_Max_Fields>;
  min?: Maybe<Post_Tag_Min_Fields>;
  stddev?: Maybe<Post_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Tag_Sum_Fields>;
  var_pop?: Maybe<Post_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Tag_Var_Samp_Fields>;
  variance?: Maybe<Post_Tag_Variance_Fields>;
};


/** aggregate fields of "post_tag" */
export type Post_Tag_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Tag_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "post_tag" */
export type Post_Tag_Aggregate_Order_By = {
  avg?: Maybe<Post_Tag_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Post_Tag_Max_Order_By>;
  min?: Maybe<Post_Tag_Min_Order_By>;
  stddev?: Maybe<Post_Tag_Stddev_Order_By>;
  stddev_pop?: Maybe<Post_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Post_Tag_Stddev_Samp_Order_By>;
  sum?: Maybe<Post_Tag_Sum_Order_By>;
  var_pop?: Maybe<Post_Tag_Var_Pop_Order_By>;
  var_samp?: Maybe<Post_Tag_Var_Samp_Order_By>;
  variance?: Maybe<Post_Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_tag" */
export type Post_Tag_Arr_Rel_Insert_Input = {
  data: Array<Post_Tag_Insert_Input>;
  on_conflict?: Maybe<Post_Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Tag_Avg_Fields = {
  __typename?: 'post_tag_avg_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "post_tag" */
export type Post_Tag_Avg_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_tag". All fields are combined with a logical 'AND'. */
export type Post_Tag_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Post_Tag_Bool_Exp>>>;
  _not?: Maybe<Post_Tag_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Post_Tag_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  post?: Maybe<Posts_Bool_Exp>;
  post_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tags_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_tag" */
export enum Post_Tag_Constraint {
  /** unique or primary key constraint */
  PostTagPkey = 'post_tag_pkey'
}

/** input type for incrementing integer column in table "post_tag" */
export type Post_Tag_Inc_Input = {
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "post_tag" */
export type Post_Tag_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  post?: Maybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tags_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Post_Tag_Max_Fields = {
  __typename?: 'post_tag_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "post_tag" */
export type Post_Tag_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Tag_Min_Fields = {
  __typename?: 'post_tag_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "post_tag" */
export type Post_Tag_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "post_tag" */
export type Post_Tag_Mutation_Response = {
  __typename?: 'post_tag_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Post_Tag>;
};

/** input type for inserting object relation for remote table "post_tag" */
export type Post_Tag_Obj_Rel_Insert_Input = {
  data: Post_Tag_Insert_Input;
  on_conflict?: Maybe<Post_Tag_On_Conflict>;
};

/** on conflict condition type for table "post_tag" */
export type Post_Tag_On_Conflict = {
  constraint: Post_Tag_Constraint;
  update_columns: Array<Post_Tag_Update_Column>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};

/** ordering options when selecting data from "post_tag" */
export type Post_Tag_Order_By = {
  created_at?: Maybe<Order_By>;
  post?: Maybe<Posts_Order_By>;
  post_id?: Maybe<Order_By>;
  tag?: Maybe<Tags_Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "post_tag" */
export type Post_Tag_Pk_Columns_Input = {
  post_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};

/** select columns of table "post_tag" */
export enum Post_Tag_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "post_tag" */
export type Post_Tag_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Post_Tag_Stddev_Fields = {
  __typename?: 'post_tag_stddev_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "post_tag" */
export type Post_Tag_Stddev_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Tag_Stddev_Pop_Fields = {
  __typename?: 'post_tag_stddev_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "post_tag" */
export type Post_Tag_Stddev_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Tag_Stddev_Samp_Fields = {
  __typename?: 'post_tag_stddev_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "post_tag" */
export type Post_Tag_Stddev_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Post_Tag_Sum_Fields = {
  __typename?: 'post_tag_sum_fields';
  post_id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "post_tag" */
export type Post_Tag_Sum_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "post_tag" */
export enum Post_Tag_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PostId = 'post_id',
  /** column name */
  TagId = 'tag_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Post_Tag_Var_Pop_Fields = {
  __typename?: 'post_tag_var_pop_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "post_tag" */
export type Post_Tag_Var_Pop_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Tag_Var_Samp_Fields = {
  __typename?: 'post_tag_var_samp_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "post_tag" */
export type Post_Tag_Var_Samp_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Tag_Variance_Fields = {
  __typename?: 'post_tag_variance_fields';
  post_id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "post_tag" */
export type Post_Tag_Variance_Order_By = {
  post_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts';
  /** An object relationship */
  author: Users;
  author_id: Scalars['String'];
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregated array relationship */
  bookmarks_aggregate: Bookmarks_Aggregate;
  /** An array relationship */
  comments: Array<Post_Comments>;
  /** An aggregated array relationship */
  comments_aggregate: Post_Comments_Aggregate;
  content: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  header_image?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** A computed field, executes function "post_bookmarked_by_user" */
  is_bookmarked_by_user?: Maybe<Scalars['Boolean']>;
  /** A computed field, executes function "post_liked_by_user" */
  is_liked_by_user?: Maybe<Scalars['Boolean']>;
  is_published: Scalars['Boolean'];
  likes: Scalars['Int'];
  /** An array relationship */
  post_likes: Array<Post_Likes>;
  /** An aggregated array relationship */
  post_likes_aggregate: Post_Likes_Aggregate;
  /** An array relationship */
  post_tags: Array<Post_Tag>;
  /** An aggregated array relationship */
  post_tags_aggregate: Post_Tag_Aggregate;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "posts" */
export type PostsBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_TagsArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** columns and relationships of "posts" */
export type PostsPost_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Posts_Max_Order_By>;
  min?: Maybe<Posts_Min_Order_By>;
  stddev?: Maybe<Posts_Stddev_Order_By>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>;
  sum?: Maybe<Posts_Sum_Order_By>;
  var_pop?: Maybe<Posts_Var_Pop_Order_By>;
  var_samp?: Maybe<Posts_Var_Samp_Order_By>;
  variance?: Maybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  _not?: Maybe<Posts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Posts_Bool_Exp>>>;
  author?: Maybe<Users_Bool_Exp>;
  author_id?: Maybe<String_Comparison_Exp>;
  bookmarks?: Maybe<Bookmarks_Bool_Exp>;
  comments?: Maybe<Post_Comments_Bool_Exp>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  header_image?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  likes?: Maybe<Int_Comparison_Exp>;
  post_likes?: Maybe<Post_Likes_Bool_Exp>;
  post_tags?: Maybe<Post_Tag_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing integer column in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  author?: Maybe<Users_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars['String']>;
  bookmarks?: Maybe<Bookmarks_Arr_Rel_Insert_Input>;
  comments?: Maybe<Post_Comments_Arr_Rel_Insert_Input>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header_image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_published?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Scalars['Int']>;
  post_likes?: Maybe<Post_Likes_Arr_Rel_Insert_Input>;
  post_tags?: Maybe<Post_Tag_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header_image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header_image?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header_image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header_image?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  on_conflict?: Maybe<Posts_On_Conflict>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns: Array<Posts_Update_Column>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** ordering options when selecting data from "posts" */
export type Posts_Order_By = {
  author?: Maybe<Users_Order_By>;
  author_id?: Maybe<Order_By>;
  bookmarks_aggregate?: Maybe<Bookmarks_Aggregate_Order_By>;
  comments_aggregate?: Maybe<Post_Comments_Aggregate_Order_By>;
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  header_image?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
  post_likes_aggregate?: Maybe<Post_Likes_Aggregate_Order_By>;
  post_tags_aggregate?: Maybe<Post_Tag_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "posts" */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HeaderImage = 'header_image',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  Likes = 'likes',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  author_id?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  header_image?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  is_published?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  likes?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HeaderImage = 'header_image',
  /** column name */
  Id = 'id',
  /** column name */
  IsPublished = 'is_published',
  /** column name */
  Likes = 'likes',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>;
  likes?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "bookmarks" */
  bookmarks: Array<Bookmarks>;
  /** fetch aggregated fields from the table: "bookmarks" */
  bookmarks_aggregate: Bookmarks_Aggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarks_by_pk?: Maybe<Bookmarks>;
  /** fetch data from the table: "followers" */
  followers: Array<Followers>;
  /** fetch aggregated fields from the table: "followers" */
  followers_aggregate: Followers_Aggregate;
  /** fetch data from the table: "followers" using primary key columns */
  followers_by_pk?: Maybe<Followers>;
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "livestock_likes" */
  livestock_likes: Array<Livestock_Likes>;
  /** fetch aggregated fields from the table: "livestock_likes" */
  livestock_likes_aggregate: Livestock_Likes_Aggregate;
  /** fetch data from the table: "livestock_likes" using primary key columns */
  livestock_likes_by_pk?: Maybe<Livestock_Likes>;
  /** fetch data from the table: "livestocks" */
  livestocks: Array<Livestocks>;
  /** fetch aggregated fields from the table: "livestocks" */
  livestocks_aggregate: Livestocks_Aggregate;
  /** fetch data from the table: "livestocks" using primary key columns */
  livestocks_by_pk?: Maybe<Livestocks>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "post_comment_likes" */
  post_comment_likes: Array<Post_Comment_Likes>;
  /** fetch aggregated fields from the table: "post_comment_likes" */
  post_comment_likes_aggregate: Post_Comment_Likes_Aggregate;
  /** fetch data from the table: "post_comment_likes" using primary key columns */
  post_comment_likes_by_pk?: Maybe<Post_Comment_Likes>;
  /** fetch data from the table: "post_comment_replies" */
  post_comment_replies: Array<Post_Comment_Replies>;
  /** fetch aggregated fields from the table: "post_comment_replies" */
  post_comment_replies_aggregate: Post_Comment_Replies_Aggregate;
  /** fetch data from the table: "post_comment_replies" using primary key columns */
  post_comment_replies_by_pk?: Maybe<Post_Comment_Replies>;
  /** fetch data from the table: "post_comments" */
  post_comments: Array<Post_Comments>;
  /** fetch aggregated fields from the table: "post_comments" */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<Post_Comments>;
  /** fetch data from the table: "post_likes" */
  post_likes: Array<Post_Likes>;
  /** fetch aggregated fields from the table: "post_likes" */
  post_likes_aggregate: Post_Likes_Aggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<Post_Likes>;
  /** fetch data from the table: "post_tag" */
  post_tag: Array<Post_Tag>;
  /** fetch aggregated fields from the table: "post_tag" */
  post_tag_aggregate: Post_Tag_Aggregate;
  /** fetch data from the table: "post_tag" using primary key columns */
  post_tag_by_pk?: Maybe<Post_Tag>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** query root */
export type Query_RootBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** query root */
export type Query_RootBookmarks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** query root */
export type Query_RootFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** query root */
export type Query_RootFollowers_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** query root */
export type Query_RootFollowings_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLivestock_LikesArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootLivestock_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootLivestock_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLivestocksArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** query root */
export type Query_RootLivestocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** query root */
export type Query_RootLivestocks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** query root */
export type Query_RootOnline_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comment_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comment_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comment_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_Comment_RepliesArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Replies_Order_By>>;
  where?: Maybe<Post_Comment_Replies_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comment_Replies_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Replies_Order_By>>;
  where?: Maybe<Post_Comment_Replies_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comment_Replies_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_CommentsArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPost_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Likes_By_PkArgs = {
  post_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** query root */
export type Query_RootPost_TagArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** query root */
export type Query_RootPost_Tag_By_PkArgs = {
  post_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};


/** query root */
export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** query root */
export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** query root */
export type Query_RootTags_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "bookmarks" */
  bookmarks: Array<Bookmarks>;
  /** fetch aggregated fields from the table: "bookmarks" */
  bookmarks_aggregate: Bookmarks_Aggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarks_by_pk?: Maybe<Bookmarks>;
  /** fetch data from the table: "followers" */
  followers: Array<Followers>;
  /** fetch aggregated fields from the table: "followers" */
  followers_aggregate: Followers_Aggregate;
  /** fetch data from the table: "followers" using primary key columns */
  followers_by_pk?: Maybe<Followers>;
  /** fetch data from the table: "followings" */
  followings: Array<Followings>;
  /** fetch aggregated fields from the table: "followings" */
  followings_aggregate: Followings_Aggregate;
  /** fetch data from the table: "followings" using primary key columns */
  followings_by_pk?: Maybe<Followings>;
  /** fetch data from the table: "livestock_likes" */
  livestock_likes: Array<Livestock_Likes>;
  /** fetch aggregated fields from the table: "livestock_likes" */
  livestock_likes_aggregate: Livestock_Likes_Aggregate;
  /** fetch data from the table: "livestock_likes" using primary key columns */
  livestock_likes_by_pk?: Maybe<Livestock_Likes>;
  /** fetch data from the table: "livestocks" */
  livestocks: Array<Livestocks>;
  /** fetch aggregated fields from the table: "livestocks" */
  livestocks_aggregate: Livestocks_Aggregate;
  /** fetch data from the table: "livestocks" using primary key columns */
  livestocks_by_pk?: Maybe<Livestocks>;
  /** fetch data from the table: "online_users" */
  online_users: Array<Online_Users>;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: Online_Users_Aggregate;
  /** fetch data from the table: "post_comment_likes" */
  post_comment_likes: Array<Post_Comment_Likes>;
  /** fetch aggregated fields from the table: "post_comment_likes" */
  post_comment_likes_aggregate: Post_Comment_Likes_Aggregate;
  /** fetch data from the table: "post_comment_likes" using primary key columns */
  post_comment_likes_by_pk?: Maybe<Post_Comment_Likes>;
  /** fetch data from the table: "post_comment_replies" */
  post_comment_replies: Array<Post_Comment_Replies>;
  /** fetch aggregated fields from the table: "post_comment_replies" */
  post_comment_replies_aggregate: Post_Comment_Replies_Aggregate;
  /** fetch data from the table: "post_comment_replies" using primary key columns */
  post_comment_replies_by_pk?: Maybe<Post_Comment_Replies>;
  /** fetch data from the table: "post_comments" */
  post_comments: Array<Post_Comments>;
  /** fetch aggregated fields from the table: "post_comments" */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** fetch data from the table: "post_comments" using primary key columns */
  post_comments_by_pk?: Maybe<Post_Comments>;
  /** fetch data from the table: "post_likes" */
  post_likes: Array<Post_Likes>;
  /** fetch aggregated fields from the table: "post_likes" */
  post_likes_aggregate: Post_Likes_Aggregate;
  /** fetch data from the table: "post_likes" using primary key columns */
  post_likes_by_pk?: Maybe<Post_Likes>;
  /** fetch data from the table: "post_tag" */
  post_tag: Array<Post_Tag>;
  /** fetch aggregated fields from the table: "post_tag" */
  post_tag_aggregate: Post_Tag_Aggregate;
  /** fetch data from the table: "post_tag" using primary key columns */
  post_tag_by_pk?: Maybe<Post_Tag>;
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBookmarks_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowers_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootFollowings_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLivestock_LikesArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLivestock_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLivestock_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLivestocksArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLivestocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLivestocks_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootOnline_UsersArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootOnline_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Online_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Online_Users_Order_By>>;
  where?: Maybe<Online_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comment_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comment_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Likes_Order_By>>;
  where?: Maybe<Post_Comment_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comment_Likes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_Comment_RepliesArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Replies_Order_By>>;
  where?: Maybe<Post_Comment_Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comment_Replies_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comment_Replies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comment_Replies_Order_By>>;
  where?: Maybe<Post_Comment_Replies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comment_Replies_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_CommentsArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Comments_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPost_LikesArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Likes_By_PkArgs = {
  post_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootPost_TagArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Tag_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPost_Tag_By_PkArgs = {
  post_id: Scalars['Int'];
  tag_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTagsArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tags_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tags_Order_By>>;
  where?: Maybe<Tags_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTags_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  color: Scalars['String'];
  created_at?: Maybe<Scalars['timestamptz']>;
  creator: Scalars['String'];
  id: Scalars['Int'];
  label: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  tag_posts: Array<Post_Tag>;
  /** An aggregated array relationship */
  tag_posts_aggregate: Post_Tag_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "tags" */
export type TagsTag_PostsArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsTag_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Tag_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Tag_Order_By>>;
  where?: Maybe<Post_Tag_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  avg?: Maybe<Tags_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
  stddev?: Maybe<Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Tags_Sum_Fields>;
  var_pop?: Maybe<Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Tags_Var_Samp_Fields>;
  variance?: Maybe<Tags_Variance_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tags_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tags" */
export type Tags_Aggregate_Order_By = {
  avg?: Maybe<Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tags_Max_Order_By>;
  min?: Maybe<Tags_Min_Order_By>;
  stddev?: Maybe<Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Tags_Sum_Order_By>;
  var_pop?: Maybe<Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Tags_Var_Samp_Order_By>;
  variance?: Maybe<Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tags" */
export type Tags_Arr_Rel_Insert_Input = {
  data: Array<Tags_Insert_Input>;
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Tags_Avg_Fields = {
  __typename?: 'tags_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tags" */
export type Tags_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tags_Bool_Exp>>>;
  _not?: Maybe<Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tags_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  creator?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  tag_posts?: Maybe<Post_Tag_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint */
  TagsPkey = 'tags_pkey'
}

/** input type for incrementing integer column in table "tags" */
export type Tags_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tag_posts?: Maybe<Post_Tag_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tags" */
export type Tags_Max_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tags" */
export type Tags_Min_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  on_conflict?: Maybe<Tags_On_Conflict>;
};

/** on conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns: Array<Tags_Update_Column>;
  where?: Maybe<Tags_Bool_Exp>;
};

/** ordering options when selecting data from "tags" */
export type Tags_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  creator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  tag_posts_aggregate?: Maybe<Post_Tag_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "tags" */
export type Tags_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tags_Stddev_Fields = {
  __typename?: 'tags_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tags" */
export type Tags_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tags_Stddev_Pop_Fields = {
  __typename?: 'tags_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tags" */
export type Tags_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tags_Stddev_Samp_Fields = {
  __typename?: 'tags_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tags" */
export type Tags_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tags_Sum_Fields = {
  __typename?: 'tags_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tags" */
export type Tags_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Creator = 'creator',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tags_Var_Pop_Fields = {
  __typename?: 'tags_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tags" */
export type Tags_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tags_Var_Samp_Fields = {
  __typename?: 'tags_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tags" */
export type Tags_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tags_Variance_Fields = {
  __typename?: 'tags_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tags" */
export type Tags_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregated array relationship */
  bookmarks_aggregate: Bookmarks_Aggregate;
  created_at: Scalars['timetz'];
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  followers: Array<Followers>;
  /** An aggregated array relationship */
  followers_aggregate: Followers_Aggregate;
  /** An array relationship */
  followings: Array<Followings>;
  /** An aggregated array relationship */
  followings_aggregate: Followings_Aggregate;
  id: Scalars['String'];
  last_seen?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  like_many_posts: Array<Post_Likes>;
  /** An aggregated array relationship */
  like_many_posts_aggregate: Post_Likes_Aggregate;
  /** An array relationship */
  livestock_likes: Array<Livestock_Likes>;
  /** An aggregated array relationship */
  livestock_likes_aggregate: Livestock_Likes_Aggregate;
  /** An array relationship */
  livestocks: Array<Livestocks>;
  /** An aggregated array relationship */
  livestocks_aggregate: Livestocks_Aggregate;
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  post_comments: Array<Post_Comments>;
  /** An aggregated array relationship */
  post_comments_aggregate: Post_Comments_Aggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregated array relationship */
  posts_aggregate: Posts_Aggregate;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "users" */
export type UsersBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowersArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowers_AggregateArgs = {
  distinct_on?: Maybe<Array<Followers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followers_Order_By>>;
  where?: Maybe<Followers_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowingsArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFollowings_AggregateArgs = {
  distinct_on?: Maybe<Array<Followings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Followings_Order_By>>;
  where?: Maybe<Followings_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLike_Many_PostsArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLike_Many_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Likes_Order_By>>;
  where?: Maybe<Post_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLivestock_LikesArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLivestock_Likes_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestock_Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestock_Likes_Order_By>>;
  where?: Maybe<Livestock_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLivestocksArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLivestocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Livestocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Livestocks_Order_By>>;
  where?: Maybe<Livestocks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPost_CommentsArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPost_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Post_Comments_Order_By>>;
  where?: Maybe<Post_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Posts_Order_By>>;
  where?: Maybe<Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  bookmarks?: Maybe<Bookmarks_Bool_Exp>;
  created_at?: Maybe<Timetz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  followers?: Maybe<Followers_Bool_Exp>;
  followings?: Maybe<Followings_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  last_seen?: Maybe<Timestamptz_Comparison_Exp>;
  like_many_posts?: Maybe<Post_Likes_Bool_Exp>;
  livestock_likes?: Maybe<Livestock_Likes_Bool_Exp>;
  livestocks?: Maybe<Livestocks_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  post_comments?: Maybe<Post_Comments_Bool_Exp>;
  posts?: Maybe<Posts_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  bookmarks?: Maybe<Bookmarks_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timetz']>;
  email?: Maybe<Scalars['String']>;
  followers?: Maybe<Followers_Arr_Rel_Insert_Input>;
  followings?: Maybe<Followings_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  like_many_posts?: Maybe<Post_Likes_Arr_Rel_Insert_Input>;
  livestock_likes?: Maybe<Livestock_Likes_Arr_Rel_Insert_Input>;
  livestocks?: Maybe<Livestocks_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  post_comments?: Maybe<Post_Comments_Arr_Rel_Insert_Input>;
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timetz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timetz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  bookmarks_aggregate?: Maybe<Bookmarks_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  followers_aggregate?: Maybe<Followers_Aggregate_Order_By>;
  followings_aggregate?: Maybe<Followings_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  last_seen?: Maybe<Order_By>;
  like_many_posts_aggregate?: Maybe<Post_Likes_Aggregate_Order_By>;
  livestock_likes_aggregate?: Maybe<Livestock_Likes_Aggregate_Order_By>;
  livestocks_aggregate?: Maybe<Livestocks_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  post_comments_aggregate?: Maybe<Post_Comments_Aggregate_Order_By>;
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timetz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);

export type Insert_New_UserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
}>;


export type Insert_New_UserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export type Create_PostMutationVariables = Exact<{
  author_id: Scalars['String'];
  data: Array<Post_Tag_Insert_Input> | Post_Tag_Insert_Input;
  content: Scalars['String'];
  header_image: Scalars['String'];
  title: Scalars['String'];
  is_published?: Maybe<Scalars['Boolean']>;
}>;


export type Create_PostMutation = (
  { __typename?: 'mutation_root' }
  & { insert_posts_one?: Maybe<(
    { __typename?: 'posts' }
    & Pick<Posts, 'id'>
  )> }
);

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = (
  { __typename?: 'query_root' }
  & { posts: Array<(
    { __typename?: 'posts' }
    & Pick<Posts, 'author_id' | 'content' | 'created_at' | 'header_image' | 'id' | 'is_bookmarked_by_user' | 'is_liked_by_user' | 'likes'>
  )> }
);


export const GetUserDocument = gql`
    query GetUser($id: String!) {
  users_by_pk(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const Insert_New_UserDocument = gql`
    mutation INSERT_NEW_USER($id: String!, $name: String!, $email: String, $picture: String) {
  insert_users_one(
    object: {id: $id, name: $name, email: $email, picture: $picture}
    on_conflict: {constraint: users_pkey, update_columns: created_at}
  ) {
    id
  }
}
    `;
export type Insert_New_UserMutationFn = Apollo.MutationFunction<Insert_New_UserMutation, Insert_New_UserMutationVariables>;

/**
 * __useInsert_New_UserMutation__
 *
 * To run a mutation, you first call `useInsert_New_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsert_New_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewUserMutation, { data, loading, error }] = useInsert_New_UserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      picture: // value for 'picture'
 *   },
 * });
 */
export function useInsert_New_UserMutation(baseOptions?: Apollo.MutationHookOptions<Insert_New_UserMutation, Insert_New_UserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Insert_New_UserMutation, Insert_New_UserMutationVariables>(Insert_New_UserDocument, options);
      }
export type Insert_New_UserMutationHookResult = ReturnType<typeof useInsert_New_UserMutation>;
export type Insert_New_UserMutationResult = Apollo.MutationResult<Insert_New_UserMutation>;
export type Insert_New_UserMutationOptions = Apollo.BaseMutationOptions<Insert_New_UserMutation, Insert_New_UserMutationVariables>;
export const Create_PostDocument = gql`
    mutation create_post($author_id: String!, $data: [post_tag_insert_input!]!, $content: String!, $header_image: String!, $title: String!, $is_published: Boolean) {
  insert_posts_one(
    object: {post_tags: {data: $data}, author_id: $author_id, content: $content, header_image: $header_image, title: $title, is_published: $is_published}
  ) {
    id
  }
}
    `;
export type Create_PostMutationFn = Apollo.MutationFunction<Create_PostMutation, Create_PostMutationVariables>;

/**
 * __useCreate_PostMutation__
 *
 * To run a mutation, you first call `useCreate_PostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_PostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreate_PostMutation({
 *   variables: {
 *      author_id: // value for 'author_id'
 *      data: // value for 'data'
 *      content: // value for 'content'
 *      header_image: // value for 'header_image'
 *      title: // value for 'title'
 *      is_published: // value for 'is_published'
 *   },
 * });
 */
export function useCreate_PostMutation(baseOptions?: Apollo.MutationHookOptions<Create_PostMutation, Create_PostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_PostMutation, Create_PostMutationVariables>(Create_PostDocument, options);
      }
export type Create_PostMutationHookResult = ReturnType<typeof useCreate_PostMutation>;
export type Create_PostMutationResult = Apollo.MutationResult<Create_PostMutation>;
export type Create_PostMutationOptions = Apollo.BaseMutationOptions<Create_PostMutation, Create_PostMutationVariables>;
export const GetPostsDocument = gql`
    query getPosts {
  posts {
    author_id
    content
    created_at
    header_image
    id
    is_bookmarked_by_user
    is_liked_by_user
    likes
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;