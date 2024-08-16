export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={
        status === 'received'
          ? 'rounded-full px-2 py-1 text-green-500 ring-1 ring-green-500'
          : 'rounded-full px-2 py-1 text-yellow-500 ring-1 ring-yellow-500'
      }
    >
      {status === 'received' ? 'Received' : 'Pending'}
    </span>
  );
}
