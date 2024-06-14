import React, { useState } from "react";

function Tempreture() {
  const [celcious, setcelcious] = useState(0);
  const [farenheight, setfarenheight] = useState(0);

  const handlecelciouschange = (e) => {
    const c = e.target.value;
    setcelcious(c);
    setfarenheight(((c * 9) / 5 + 32).toFixed(2));
  };
  const handlefarenheight = (e) => {
    const f = e.target.value;
    setfarenheight(f);
    setcelcious((((f - 32) * 5) / 9).toFixed(2));
  };

  return (
    <>
      <input
        type="text"
        value={celcious}
        onChange={handlecelciouschange}
        placeholder="celcious"
      />
      <input
        type="text"
        value={farenheight}
        onChange={handlefarenheight}
        placeholder="farenheight"
      />
      <div>{}</div>
    </>
  );
}

export default Tempreture;
