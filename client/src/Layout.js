import React from "react";
import { Helmet } from "react-helmet"; //helmet is use for updating mata data

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Vipin Kumar",
  description: "Vipin Kumar -- Portfolio",
  keywords:
    "vipin,vipin kumar,vipin kumar patel,portfolio,vipin portfolio,vipin kumar portfolio, vipin kumar patel portfolio,resume,web developement,webdeveloper,software,software engineer",
  author: "Vipin Kumar Patel",
};

export default Layout;
