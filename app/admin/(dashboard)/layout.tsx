import AdminSidebar from '@/components/admin/sidebar/AdminSidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AdminSidebar />
        <main className='ml-8'>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

export default DashboardLayout;
