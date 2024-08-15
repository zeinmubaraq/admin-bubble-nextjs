import {
  AdjustmentsHorizontalIcon,
  ArrowTopRightOnSquareIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import DashboardProductItem from './_components/dashboard-product-item';
import DashboardCardTitle from './_components/dashboard-card-title';
import TableHead from './_components/table-head';
import TableItem from './_components/table-item';

export default function Home() {
  return (
    <main className="mt-4 grid grid-cols-3 gap-4">
      <div className="col-span-2 grid h-screen grid-cols-2 gap-4">
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm">1</div>
        <div className="col-span-1 h-40 rounded-lg bg-white p-4 shadow-sm">3</div>
        <div className="relative col-span-1 h-40 rounded-lg bg-white p-4 shadow-sm">
          <ArrowTopRightOnSquareIcon className="absolute right-3 top-3 h-7 w-7 text-green-500" />
          <DashboardCardTitle>Total Income</DashboardCardTitle>
          <p className="mt-5 text-4xl font-medium">$ 215.835.89</p>
          <p className="absolute bottom-4 text-sm text-gray-400">
            24% increase compared on last week
          </p>
        </div>
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <DashboardCardTitle>Recent Order</DashboardCardTitle>
            <button className="inline-flex items-center gap-x-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm">
              <AdjustmentsHorizontalIcon className="h-5 w-5" />
              Filter
            </button>
          </div>
          <div className="mt-4">
            <table className="table w-full table-auto">
              <thead>
                <tr>
                  <TableHead>#</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Customer</TableHead>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <TableItem>1</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/profile.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Barhat Blue
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <span>Received</span>
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>M-Starlight</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>2</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/profile.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Barhat Blue
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <span>Received</span>
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>M-Starlight</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>3</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/profile.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Barhat Blue
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <span>Received</span>
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>M-Starlight</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>4</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/profile.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Barhat Blue
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <span>Received</span>
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>M-Starlight</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>5</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/profile.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Barhat Blue
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <span>Received</span>
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>M-Starlight</TableItem>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <DashboardCardTitle>Top products</DashboardCardTitle>
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
          <div className="mt-3.5 space-y-1">
            <DashboardProductItem name="Emerald Velvet" sold="912" price="$ 355.90" />
            <DashboardProductItem name="Velvet Coral" sold="804" price="$ 279.00" />
            <DashboardProductItem name="Rotterdam" sold="738" price="$ 329.95" />
            <DashboardProductItem name="Happy Yellow" sold="684" price="$ 315.50" />
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm">5</div>
      </div>
    </main>
  );
}

