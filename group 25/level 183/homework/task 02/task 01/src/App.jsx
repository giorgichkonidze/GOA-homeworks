import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("component mounted")
  }, [])

  return <div>Hello</div>
}