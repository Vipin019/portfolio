import "./portfolio.css";
import { BiLike } from "react-icons/bi";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Portfolio = () => {
  const [projects, setProjects] = useState(null);
  const [page, setPage] = useState(1);
  const [maxLen, setMaxLen] = useState(null);
  const [currentLen, setCurrentLen] = useState(3);

  const onStart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v2/project/get/?page=1"
      );
      if (res?.data?.success) {
        setProjects(res?.data?.data?.projects);
        const res2 = await axios.get(
          "http://localhost:8080/api/v2/project/get-total-count"
        );
        if (res2?.data?.success) {
          setMaxLen(res2?.data?.data?.totalProjectCount);
        } else {
          toast.error(res2?.data?.message);
        }
      } else {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  useEffect(() => {
    onStart();
  }, []);

  const handleOnLoadMore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v2/project/get/?page=${page + 1}`
      );
      if (res?.data?.success) {
        const tempProjects = projects;
        const temp = res?.data?.data?.projects;
        for (let val of temp) {
          tempProjects.push(val);
        }
        setProjects(tempProjects);
        setCurrentLen(currentLen + 3);
        setPage(page + 1);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="flex portfolio">
        <div className="container portfolio__container">
          {projects?.map((project) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={project?.image?.url} alt="Image" />
                </div>
                <div className="flex portfolio__item-title">
                  <h3>{project?.name}</h3>
                  <div className="flex portfolio__item_like">
                    <BiLike className="portfolio__item_like-icon" />
                    <h6>{project?.like?.length}</h6>
                  </div>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={project?.links?.repo}
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={project?.links?.live}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        {currentLen < maxLen && (
          <div
            className="flex portfolio_container-icon"
            onClick={handleOnLoadMore}
          >
            <MdExpandMore className="flex portfolio_container--icon" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
