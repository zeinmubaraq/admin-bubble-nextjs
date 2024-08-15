import { Squares2X2Icon } from '@heroicons/react/24/solid';
import SidebarItem from './sidebar-item';
import {
  ArrowLeftStartOnRectangleIcon,
  BuildingStorefrontIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentTextIcon,
  HomeIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  TruckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import SidebarLogout from './sidebar-logout';

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-52 py-4 pl-4">
      <div className="h-full rounded-lg bg-white shadow-sm">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex items-center gap-x-1.5 px-5 py-4">
              <Squares2X2Icon className="h-7 w-7 text-blue-500" />
              <h2 className="text-xl font-bold">Marketo</h2>
            </div>
            <div className="px-2">
              <small className="ml-3 font-medium text-gray-400">Menu</small>
              <div className="mt-1 space-y-1">
                <SidebarItem href="/">
                  <HomeIcon className="h-5 w-5" />
                  Home
                </SidebarItem>
                <SidebarItem href="#">
                  <UsersIcon className="h-5 w-5" />
                  Customers
                </SidebarItem>

                <SidebarItem href="#">
                  <ShoppingCartIcon className="h-5 w-5" />
                  Orders
                  <span className="absolute right-3 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs text-white">
                    12
                  </span>
                </SidebarItem>

                <SidebarItem href="#">
                  <DocumentTextIcon className="h-5 w-5" />
                  Documents
                </SidebarItem>

                <SidebarItem href="#">
                  <ChartPieIcon className="h-5 w-5" />
                  Analytics
                </SidebarItem>

                <SidebarItem href="#">
                  <CubeIcon className="h-5 w-5" />
                  Products
                </SidebarItem>
              </div>
            </div>

            <div className="mt-5 px-2">
              <small className="ml-3 font-medium text-gray-400">Sales</small>
              <div className="mt-1 space-y-1">
                <SidebarItem href="#">
                  <BuildingStorefrontIcon className="h-5 w-5" />
                  My Store
                </SidebarItem>

                <SidebarItem href="#">
                  <ReceiptPercentIcon className="h-5 w-5" />
                  Discounts
                </SidebarItem>

                <SidebarItem href="#">
                  <TruckIcon className="h-5 w-5" />
                  Shipments
                </SidebarItem>
              </div>
            </div>
          </div>
          <div className="space-y-1 px-2 pb-3">
            <SidebarItem href="#">
              <Cog6ToothIcon className="h-5 w-5" />
              Settings
            </SidebarItem>
            <SidebarLogout href="#">
              <ArrowLeftStartOnRectangleIcon className="h-5 w-5 text-red-500" />
              Log Out
            </SidebarLogout>
          </div>
        </div>
      </div>
    </aside>
  );
}
