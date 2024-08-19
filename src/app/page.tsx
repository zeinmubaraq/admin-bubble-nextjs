'use client';
import {
  AdjustmentsHorizontalIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUpRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import DashboardProductItem from './_components/dashboard-product-item';
import DashboardCardTitle from './_components/dashboard-card-title';
import TableHead from './_components/table-head';
import TableItem from './_components/table-item';
import StatusBadge from './_components/status-badge';
import { Chart, ArcElement, PointElement, CategoryScale, LinearScale, LineElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import DashboardCustomerItem from './_components/dashboard-customer-item';

Chart.register([CategoryScale, LinearScale, ArcElement, LineElement, PointElement]);

export default function Home() {
  const data1 = {
    labels: ['Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 70],
        fill: false,
        borderColor: 'rgb(37, 99, 235)',
        tension: 0.4,
      },
    ],
  };

  const data = {
    labels: ['Shoes', 'Jacket', 'Bag', 'Hat'],
    datasets: [
      {
        label: 'Product Sold Dataset',
        data: [300, 100, 50, 100],
        backgroundColor: [
          'rgb(250, 204, 21)',
          'rgb(248, 113, 113)',
          'rgb(96, 165, 250)',
          'rgb(74, 222, 128)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <main className="mt-4 grid grid-cols-3 gap-4">
      <div className="col-span-2 grid min-h-screen grid-cols-2 gap-4">
        <div className="col-span-2 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <DashboardCardTitle>Total Revenue</DashboardCardTitle>
            <button className="inline-flex items-center gap-x-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm">
              Monthly
              <ChevronDownIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-x-5">
              <p className="text-4xl font-medium">$17,068.92</p>
              <span className="flex items-center gap-x-2 rounded-full px-2 text-green-500 ring-1 ring-green-500">
                <ArrowUpRightIcon className="h-4 w-4" />
                8.34%
              </span>
            </div>
            <p className="mt-2 text-gray-800">Gained $9,721.54 this month</p>
          </div>

          <div>
            <Line data={data1} />
          </div>
        </div>
        <div className="col-span-1 h-40 rounded-lg bg-white p-4 shadow-sm">
          <div className="flex justify-between">
            <div>
              <DashboardCardTitle>Product Sold</DashboardCardTitle>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="flex w-full items-center gap-x-2 rounded-md bg-yellow-100/70 px-2 py-1 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-yellow-400"></span>Shoes
                </div>
                <div className="flex w-full items-center gap-x-2 rounded-md bg-red-100/70 px-2 py-1 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-red-400"></span>Jacket
                </div>
                <div className="flex w-full items-center gap-x-2 rounded-md bg-blue-100/70 px-2 py-1 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-blue-400"></span>Bag
                </div>
                <div className="flex w-full items-center gap-x-2 rounded-md bg-green-100/70 px-2 py-1 text-sm">
                  <span className="inline-block h-3 w-3 rounded-full bg-green-400"></span>Hat
                </div>
              </div>
            </div>
            <div className="w-32">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
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
                        src="/shoes-4.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Lunar Roam
                    </div>
                  </TableItem>
                  <TableItem>May 5</TableItem>
                  <TableItem>
                    <StatusBadge status="received" />
                  </TableItem>
                  <TableItem>$359.90</TableItem>
                  <TableItem>Miguel H</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>2</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/shoes-6.jpeg"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Reactx Infinity Run 4
                    </div>
                  </TableItem>
                  <TableItem>May 10</TableItem>
                  <TableItem>
                    <StatusBadge status="received" />
                  </TableItem>
                  <TableItem>$329.40</TableItem>
                  <TableItem>Alexandro J</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>3</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/shoes-7.jpeg"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Reactx Pegasus Trail 5
                    </div>
                  </TableItem>
                  <TableItem>May 18</TableItem>
                  <TableItem>
                    <StatusBadge status="received" />
                  </TableItem>
                  <TableItem>$269.20</TableItem>
                  <TableItem>Bartosz R</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>4</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/shoes-8.png"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Zoom X Streak Fly
                    </div>
                  </TableItem>
                  <TableItem>May 20</TableItem>
                  <TableItem>
                    <StatusBadge status="pending" />
                  </TableItem>
                  <TableItem>$313.40</TableItem>
                  <TableItem>D Rifera</TableItem>
                </tr>

                <tr className="border-t">
                  <TableItem>5</TableItem>
                  <TableItem>
                    <div className="flex items-center gap-x-3">
                      <Image
                        src="/shoes-9.jpeg"
                        alt="Profile Logo"
                        className="h-10 w-10"
                        width={100}
                        height={100}
                      />
                      Pegasus Plus
                    </div>
                  </TableItem>
                  <TableItem>May 23</TableItem>
                  <TableItem>
                    <StatusBadge status="pending" />
                  </TableItem>
                  <TableItem>$379.30</TableItem>
                  <TableItem>R Bartolini</TableItem>
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
            <DashboardProductItem
              image="/shoes-1.png"
              name="Airmax DN SE"
              sold="912"
              price="$ 355.90"
            />
            <DashboardProductItem
              image="/shoes-2.png"
              name="Infinity RN4 FP"
              sold="804"
              price="$ 279.00"
            />
            <DashboardProductItem
              image="/shoes-3.jpeg"
              name="Journey Run"
              sold="738"
              price="$ 329.95"
            />
            <DashboardProductItem
              image="/shoes-4.png"
              name="Lunar Roam"
              sold="684"
              price="$ 315.50"
            />
          </div>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <DashboardCardTitle>Top Customers</DashboardCardTitle>
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </div>
          <div className="mt-3.5 space-y-1">
            <DashboardCustomerItem
              image="/people-1.jpg"
              name="Miguel H"
              type="Platinum Member"
              purchase="80"
            />
            <DashboardCustomerItem
              image="/people-2.jpg"
              name="Alexandro J"
              type="Gold Member"
              purchase="46"
            />
            <DashboardCustomerItem
              image="/people-4.jpg"
              name="Bartosz R"
              type="Gold Member"
              purchase="44"
            />
            <DashboardCustomerItem
              image="/people-5.jpg"
              name="D Rifera"
              type="Platinum Member"
              purchase="36"
            />
            <DashboardCustomerItem
              image="/people-6.jpg"
              name="R Bartolini"
              type="Platinum Member"
              purchase="31"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

