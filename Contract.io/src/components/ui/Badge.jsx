import { clsx } from 'clsx';

export const Badge = ({ status }) => {
  const styles = {
    Created: "bg-blue-100 text-blue-700",
    Approved: "bg-purple-100 text-purple-700",
    Sent: "bg-yellow-100 text-yellow-700",
    Signed: "bg-green-100 text-green-700",
    Locked: "bg-gray-100 text-gray-700",
    Revoked: "bg-red-100 text-red-700",
  };

  return (
    <span className={clsx("px-2.5 py-0.5 rounded-full text-xs font-medium", styles[status])}>
      {status}
    </span>
  );
};