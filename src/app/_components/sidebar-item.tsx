'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href ? 'bg-blue-50 font-semibold' : null} relative flex items-center gap-x-2 rounded-lg py-2 pl-3 text-sm hover:bg-blue-50`}
    >
      {children}
    </Link>
  );
}
