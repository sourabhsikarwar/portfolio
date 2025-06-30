import React from "react";
import { cover1 } from "../../assets";
import Button from "../Common/Button";
import styles, { layout } from "../../style";
import classNames from "classnames";
import { blogs } from "../../constants/blogs";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-12">
      {/* Blog Card */}
      <div className="flex flex-col md:flex-row items-start md:items-stretch rounded-2xl overflow-hidden border border-[#23232e]">
        {/* Meta */}
        <div className="flex flex-col gap-2.5 justify-between w-full md:w-fit items-start p-5 md:p-8 bg-transparent border-b md:border-r border-[#23232e]">
          <span
            className={classNames(
              styles.paragraph2,
              "!text-[#b0b0b0] font-space tracking-wide"
            )}
          >
            {blog.type}
          </span>
          <span
            className={classNames(
              styles.paragraph2,
              "!text-[#6ac1ff] font-space"
            )}
          >
            {blog.date}
          </span>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1">
          <div className="flex flex-col justify-between items-start p-5 md:p-8 flex-1 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className={styles.heading5}>{blog.title}</h3>
              <p className="text-[#b0b0b0] font-space text-[1rem] max-w-xl">
                {blog.description}
              </p>
            </div>
            <Button
              variant="outlined"
              style="secondary"
              href={blog.link}
              target="_blank"
              className="border-2 w-fit !rounded-full text-secondary transition-all duration-300"
            >
              Read Article
            </Button>
          </div>
          {/* Image/Accent */}
          <div className="flex items-center justify-center object-contain min-w-[240px] bg-[#6ac1ff] aspect-video md:aspect-auto w-full md:w-[240px]">
            <img
              src={blog.image}
              alt="Blog Cover 1"
              className="object-cover w-fit h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <section
      className={classNames(
        layout.sectionCol,
        styles.marginY,
        "gap-y-8 relative"
      )}
    >
      <div className="sm:text-left">
        <div className="h-2 w-[3rem] bg-secondary dark:bg-secondary rounded-full mb-2" />
        <h3 className={styles.heading4}>Blogs</h3>
      </div>

      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </section>
  );
};

export default Blogs;
