import Image from 'next/image';

export default function DashboardCustomerItem({
  name,
  image,
  type,
  purchase,
}: {
  name: string;
  image: string;
  type: string;
  purchase: string;
}) {
  return (
    <div className="flex items-center justify-between border-b p-3">
      <div className="flex items-center gap-x-3">
        <Image src={image} alt={name} className="h-12 w-12" width={100} height={100} />
        <div>
          <p>{name}</p>
          <p className="text-sm text-gray-400">{type}</p>
        </div>
      </div>
      <p className="font-medium">{purchase} Items</p>
    </div>
  );
}
