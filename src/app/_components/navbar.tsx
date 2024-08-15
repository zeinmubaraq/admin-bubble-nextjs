import { BellIcon, EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between rounded-lg bg-white px-4 shadow-sm">
      <div className="flex items-center gap-x-2">
        <input
          type="text"
          placeholder="Search"
          className="w-96 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-light"
        />
        <button className="rounded-lg bg-blue-500 px-1.5 py-1.5 text-white">
          <MagnifyingGlassIcon className="h-5" />
        </button>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="relative rounded-lg bg-gray-100 px-1.5 py-1.5 text-gray-600">
          <EnvelopeIcon className="h-5" />
          <span className="absolute right-1.5 top-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-500"></span>
        </button>
        <button className="relative rounded-lg bg-gray-100 px-1.5 py-1.5 text-gray-600">
          <BellIcon className="h-5" />
          <span className="absolute right-1.5 top-1.5 inline-block h-1.5 w-1.5 rounded-full bg-red-500"></span>
        </button>
        <div className="flex items-center gap-x-2">
          <Image
            src="/profile.png"
            alt="Profile Logo"
            className="h-8 w-8 rounded-lg"
            width={100}
            height={100}
          />
          <div>
            <p className="text-sm">Zein Mubaraq</p>
            <p className="text-xs text-gray-400">Project Manager</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
