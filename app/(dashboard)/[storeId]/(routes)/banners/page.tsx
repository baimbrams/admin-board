import { BannersClient } from "./components/client";

const Banners = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <BannersClient />
      </div>
    </div>
  );
};
export default Banners;
