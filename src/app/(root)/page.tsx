import React from "react";
import { Card } from "@/components";
import { getCurrentUser } from "@/lib/auth/actions";
import { getAllProducts, GetAllProductsResult } from "@/lib/actions/product";

// const products = [
//   {
//     id: 1,
//     title: "Air Max Pulse",
//     subtitle: "Men's Shoes",
//     meta: "6 Colour",
//     price: 149.99,
//     imageSrc: "/shoes/shoe-1.jpg",
//     badge: { label: "New", tone: "orange" as const },
//   },
//   {
//     id: 2,
//     title: "Air Zoom Pegasus",
//     subtitle: "Men's Shoes",
//     meta: "4 Colour",
//     price: 129.99,
//     imageSrc: "/shoes/shoe-2.webp",
//     badge: { label: "Hot", tone: "red" as const },
//   },
//   {
//     id: 3,
//     title: "InfinityRN 4",
//     subtitle: "Men's Shoes",
//     meta: "6 Colour",
//     price: 159.99,
//     imageSrc: "/shoes/shoe-3.webp",
//     badge: { label: "Trending", tone: "green" as const },
//   },
//   {
//     id: 4,
//     title: "Metcon 9",
//     subtitle: "Men's Shoes",
//     meta: "3 Colour",
//     price: 139.99,
//     imageSrc: "/shoes/shoe-4.webp",
//   },
// ];
export async function getAllProductsUnfiltered(): Promise<GetAllProductsResult> {
  return getAllProducts({
    search: undefined,
    genderSlugs: [],
    sizeSlugs: [],
    colorSlugs: [],
    brandSlugs: [],
    categorySlugs: [],
    priceMin: undefined,
    priceMax: undefined,
    priceRanges: [],
    sort: "newest",
    page: 1,
    limit: 60,
  });
}
const Home = async () => {
  const user = await getCurrentUser();
  console.log("USER:", user);
  const { products } = await getAllProductsUnfiltered();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="latest" className="pb-12">
        <h2 id="latest" className="mb-6 text-heading-3 text-dark-900">
          Latest shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card
              key={p.id}
              title={p.name}
              subtitle={p.subtitle ?? undefined}
              imageSrc={p.imageUrl ?? "/shoes/shoe-1.jpg"}
              href={`/products/${p.id}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
