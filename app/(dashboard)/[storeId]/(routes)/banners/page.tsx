import db from "@/lib/db";
import { BannersClient } from "./components/client";
import { BannerColumn } from "./components/columns";
import { format } from "date-fns";

const Banners = async ({ params }: { params: { bannerId: string } }) => {
  const bannerData = await db.banner.findMany({
    where: {
      id: params.bannerId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBanners: BannerColumn[] = bannerData.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8">
        <BannersClient data={formattedBanners} />
      </div>
    </div>
  );
};
export default Banners;
