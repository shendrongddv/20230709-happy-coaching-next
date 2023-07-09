import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CallToAction = () => {
  return (
    <section className="bg-[#FAF8F6] px-4 py-12">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:flex-1">
            <h2 className="text-3xl font-extrabold text-[#333461]">
              Get notified when I publish new articles
            </h2>
            <p className="mt-4 text-xl text-[#4A556C]">
              Stay up to date with the latest news, announcements, and articles.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              ></Input>
              <Button
                variant="destructive"
                size="default"
                className="w-full md:w-max"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
