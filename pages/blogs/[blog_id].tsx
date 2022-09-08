interface BlogPropTypes {
  id: number;
  title: string;
  date: string;
  content: string;
  externalLink: string;
}

const Blog = ({}: BlogPropTypes) => <div>Blog</div>;

export default Blog;
