import { useState } from "react";
import "./createFeature.css";
import { toast } from "react-toastify";
import axios from "axios";

const CreateFeature = () => {
  const [featureName, setFeatureName] = useState(null);
  const [link, setLink] = useState(null);
  const [image, setImage] = useState(null);
  const [previewSrc, setPreviewSrc] = useState(null);

  const handleOnFeatureCreate = async () => {
    try {
      const feature = new FormData();
      feature.append("featureName", featureName);
      feature.append("link", link);
      feature.append("image", image);
      const res = await axios.post(
        "http://localhost:8080/api/v2/feature/create",
        feature
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
        setFeatureName(null);
        setLink(null);
        setImage(null);
        setPreviewSrc(null);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Some thing went wrong");
    }
  };

  return (
    <div className="flex createFeature">
      <div className="flex createFeature_container">
        <h3>Create Feature</h3>
        <input
          type="text"
          className="inpt"
          placeholder="Write feature name"
          onChange={(e) => {
            setFeatureName(e.target.value);
          }}
        />
        <input
          type="text"
          className="inpt"
          placeholder="Profiel link"
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        {previewSrc && <img src={previewSrc} alt="Image" />}
        <label htmlFor="featureFile">Choose Image:</label>
        <input
          type="file"
          accept="image/*"
          className="inpt"
          id="featureFile"
          onChange={(e) => {
            setImage(e.target.files[0]);
            if (e.target.files[0]) {
              const reader = new FileReader();

              reader.onload = function (e) {
                setPreviewSrc(e.target.result);
              };

              reader.readAsDataURL(e.target.files[0]);
            }
          }}
        />
        <input
          type="button"
          value={"create"}
          className="btn"
          onClick={handleOnFeatureCreate}
        />
      </div>
    </div>
  );
};

export default CreateFeature;
