export interface Content {
  id: string;
  type: string;
  content: string;
}

export interface CommentProps {
  id: string;
  author: {
    avatarUrl: string;
    name: string;
    publishedAt: Date;
  };
  comment: string;
  deleteComment?: () => void;
}

export interface PostProps {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  publishedAt: Date;
  content: Content[];
  comments: CommentProps[];
}
