import "./Featured.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";

const Featured = () => {
  const [features, setFeatures] = useState([]);
  const [page, setPage] = useState(1);

  const onStart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v2/feature/get/?page=1"
      );
      if (res?.data?.success) {
        setFeatures([res?.data?.data?.features]);
      } else {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    onStart();
  }, []);

  const handleOnLoadMore = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v2/feature/get/?page=${page + 1}`
      );
      if (res?.data?.success) {
        const tempFeatures = features;
        tempFeatures.push(res.data.data.features);
        setFeatures(tempFeatures);
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
    <section id="featured">
      <h5>Problem Solving</h5>
      <h2>Featured</h2>

      <div className="container container__featured">
        <div className="featured__links">
          {features?.map((data) => (
            <>
              {data?.map((feature) => (
                <div className="featured__link">
                  <article className="featured__details">
                    <img
                      src={feature?.image?.url}
                      alt="Image"
                      className="featured__details-link"
                    ></img>
                    <h4>{feature?.featureName}</h4>
                    <small>
                      <a href={feature?.link}>Profile Link</a>
                    </small>
                  </article>
                </div>
              ))}
            </>
          ))}
        </div>
        <div className="flex feature_container-icon" onClick={handleOnLoadMore}>
          <MdExpandMore className="flex feature_container--icon" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
