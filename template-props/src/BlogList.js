const BlogList = (props) => {
  const blogs = props.blogs;
  const bigtitle = props.bigtitle;

  return (
    <div className="blog-list">
      <h1> {bigtitle} </h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{this.blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
