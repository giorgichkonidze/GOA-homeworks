import { useEffect } from "react";

function Example() {
  useEffect(() => {
    document.title = "new year";

    return () => {
      document.title = "old year";
    }
  }, []);

  return <div>Title Example</div>;
}