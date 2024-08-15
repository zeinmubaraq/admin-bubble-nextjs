export default function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="pb-2 text-left text-sm font-normal text-gray-400">{children}</th>;
}
