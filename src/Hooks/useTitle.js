import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - TutorBD`;
  }, [title]);
};

export default useTitle;
