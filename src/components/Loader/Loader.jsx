import { InfinitySpin } from "react-loader-spinner";
import css from "./style.module.css"

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin 
            width='200'
            color="#303f9f"
    />
    </div>
  );
};

export default Loader;