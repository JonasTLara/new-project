import Link from 'next/link';
import NavLinks from '@/app/ui/events/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="flex h-20 items-center justify-between px-4 py-2">
      
      <div className="flex grow justify-center space-x-4">
        <NavLinks />
      </div>
      <form className="ml-auto">
        <button className="flex items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <PowerIcon className="w-6" />
          <span>Sign Out</span>
        </button>
      </form>
    </div>
  );
}
