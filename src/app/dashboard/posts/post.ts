export interface Post {
  usuario_id?: number,
  content?: string
  inserted_at?: Date
}

export interface PostData {
  email?: string
  username?: string
  posts?: Array<Post>
}
