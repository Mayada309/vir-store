import { AiOutlineProduct } from 'react-icons/ai';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { FaHome, FaUserCheck } from 'react-icons/fa';
import { TfiAnnouncement } from 'react-icons/tfi';
import { RiAdminFill } from 'react-icons/ri';
import kiiva from '@/images/kiiva.png';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import Image from 'next/image';

const items = [
  {
    title: 'home',
    url: '/admin',
    icon: <FaHome />,
  },
  {
    title: 'products',
    url: '/admin/products',
    icon: <AiOutlineProduct />,
  },
  {
    title: 'categories',
    url: '/admin/categories',
    icon: <BiSolidCategoryAlt />,
  },
  {
    title: 'permissions',
    url: '/admin/permissions',
    icon: <FaUserCheck />,
  },
  {
    title: 'Announcements',
    url: '/admin/announcements',
    icon: <TfiAnnouncement />,
  },
  {
    title: 'Admins',
    url: '/admin/admins',
    icon: <RiAdminFill />,
  },
];

function AdminSidebar() {
  return (
    <Sidebar className=''>
      <SidebarHeader className='max-w-[100px] '>
        <Image src={kiiva} alt='kiiva' />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className='p-2' key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span className='text-lg capitalize'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Logout</SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;
