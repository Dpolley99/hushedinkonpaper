export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  content: any;
  publishedAt: string;
  tags?: string[];
}