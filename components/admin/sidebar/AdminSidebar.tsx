'use client';
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
import { Button } from '@/components/ui/button';
import { BiLogOut } from 'react-icons/bi';
import { deleteCookie, getCookie } from 'cookies-next';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const logout = async () => {
    try {
      await axios({
        method: 'POST',
        baseURL: 'http://kiiva.localhost:8000/api/logout',
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
          Accept: 'application/json',
        },
      }).then(() => {
        deleteCookie('token');
        router.push('/admin/login');
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <SidebarFooter>
        <Button variant={'ghost'} onClick={() => logout()}>
          <BiLogOut />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;
