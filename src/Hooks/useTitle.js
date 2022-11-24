import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Apnar Laptop`;
  }, [title]);
};

export default useTitle;
