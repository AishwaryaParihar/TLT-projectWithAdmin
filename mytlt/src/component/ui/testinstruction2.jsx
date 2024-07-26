import React from "react";
import { instructiondata2 } from "../data/testinstruction";

const testinstruction2 = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        {instructiondata2.map((items, index) => (
          <div>
            <h2 className="text-primary font-bold text-2xl">
              {items.heading1}
            </h2>
            <dl>
              <li>{items.li1}</li>
              <li>{items.li2}</li>
              <li>{items.li3}</li>
              <li>{items.li4}</li>
            </dl>
          </div>
        ))}
      </div>
    </>
  );
};

export default testinstruction2;
