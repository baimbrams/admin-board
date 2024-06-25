"use client";

import { ApiList } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Banner } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

interface BannersClientProps {
  data: Banner[];
}

export const BannersClient: React.FC<BannersClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Banners (${data.length})`}
          description="Atur Banner Toko"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/banners/new`)}
          variant="outline"
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Baru
        </Button>
      </div>
      <Separator />
      {/* <p>Data Table</p>
      <Heading title="API" description="API untuk Banners" />
      <Separator />
      <ApiList namaIndikator="banners" idIndikator="id" /> */}
    </>
  );
};
