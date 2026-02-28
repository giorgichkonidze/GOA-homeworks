import { useEffect } from "react";

function Example() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("hello world");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [])

  return <div>Timeout</div>
}