import { Item } from "@radix-ui/react-accordion";
import { CheckCircle, CircleSlash } from "lucide-react";

const pros = [
  {
    id: "57d7c602-554f-5995-9b3d-be3d317c7b59IDX",
    text: "create by surprise worth sure anybody note chose theory earth refus.",
  },
  {
    id: "b175c18a-ca4c-51ca-9667-5e6480046259IDX",
    text: "solve command must us forward chamber baseball highway sea forget.",
  },
  {
    id: "9d3a4e78-9076-5ab0-83cc-d00289246c4bIDX",
    text: "away news yesterday smile past completely move pure industry lesson.",
  },
  {
    id: "9db69f94-a8c3-58a7-a3ae-d98876c79480IDX",
    text: "range statement desk jack rabbit press joy alive collect leave motor dif.",
  },
];

const cons = [
  {
    id: "57d7c602-554f-5995-9b3d-be3d317c7b59IDX",
    text: "storm friendly burn doctor bar salmon paid shaking clear pie powerful as log.",
  },
  {
    id: "b175c18a-ca4c-51ca-9667-5e6480046259IDX",
    text: "passage area chemical barn careful story longer solution doctor space obtain room.",
  },
  {
    id: "9d3a4e78-9076-5ab0-83cc-d00289246c4bIDX",
    text: "left opportunity small station gently crowd island sold mainly soon eye leave which.",
  },
  {
    id: "9db69f94-a8c3-58a7-a3ae-d98876c79480IDX",
    text: "night finally slow uncle creature cotton generally park able activity she.",
  },
];

const ProCon = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-16">
          {/* Col */}
          <div className="flex w-full flex-col items-center text-center md:w-1/2">
            <span className="font-semibold">This is not for everyone!</span>
            <h2 className="h2 mt-4 font-extrabold text-primary">
              This program is perfect for you if...
            </h2>
          </div>

          {/* Col */}
          <div className="w-full md:w-4/5">
            {/* Grid */}
            <div className="grid md:grid-cols-2">
              {/* Col */}
              <div className="flex flex-col p-6 md:p-14">
                <h3 className="h4 text-center font-bold text-primary">
                  This is NOT for you if...
                </h3>

                <div className="mt-6 space-y-6 md:mt-12">
                  {pros.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <CircleSlash className="mt-1 h-4 w-4 flex-none text-destructive md:h-6 md:w-6" />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Col */}
              <div className="flex flex-col bg-white p-6 md:p-14">
                <h3 className="h4 text-center font-bold text-primary">
                  This is for you if...
                </h3>

                <div className="mt-6 space-y-6 md:mt-12">
                  {cons.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-destructive md:h-6 md:w-6" />
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCon;
