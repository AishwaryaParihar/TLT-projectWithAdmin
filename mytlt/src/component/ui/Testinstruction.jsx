import React from "react";
import { instructiondata } from "../data/instructiondata";
const Testinstruction = () => {
  return (
    <>
      {instructiondata.map((items, index) => (
        <div className="flex flex-col justify-center">
          <h6 className="text-primary font-bold">General Instructions:</h6>
          <li>{items.in1}</li>
          <table>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
};

export default Testinstruction;
