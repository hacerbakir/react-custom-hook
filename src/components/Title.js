import React, { useState } from "react";
import useTitle from "../useTitle";

function Title() {
  const [num, setNum] = useState(0);
  // useEffect(() => {
  //     document.title = `Sayı ${num}`;
  // },[num]);

  useTitle(num);
  return (
    <div className="Box">
      <button onClick={() => setNum(num + 1)}>Sayı - {num}</button>
    </div>
  );
}

export default Title;
