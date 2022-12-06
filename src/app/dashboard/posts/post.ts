export interface Post {
  usuario_id: number,
  title: string,
  content: string
}

export interface PostData {
  email: string
  username: string
  posts: Array<Post>
}
