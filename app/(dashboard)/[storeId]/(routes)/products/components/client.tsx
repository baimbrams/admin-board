"use client";

import { ApiList } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@radix-ui/react-separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./column";

interface ProductsClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Atur Produk Toko"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
          variant="outline"
        >
          <Plus className="mr-2 h-4 w-4" />
          Tambah Baru
        </Button>
      </div>
      <Separator />
      <DataTable data={data} columns={columns} searchKey="name" />
      <Separator />
      <Heading title="API" description="API untuk Products" />
      <ApiList namaIndikator="products" idIndikator="productId" />
    </>
  );
};
