import Image from 'next/image';

export default function DashboardProductItem({
  name,
  image,
  sold,
  price,
}: {
  name: string;
  image: string;
  sold: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-3">
      <div className="flex items-center gap-x-3">
        <Image src={image} alt={name} className="h-12 w-12" width={100} height={100} />
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-400">{sold} Sold</p>
        </div>
      </div>
      <p className="font-medium">{price}</p>
    </div>
  );
}
