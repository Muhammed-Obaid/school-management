import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex ">
      <div className="w-[14%] md:w-[6%] lg:w-[16%] xl:w-[14%] p-2">
        <Link href={'/'} className="flex justify-center lg:justify-start items-center gap-2">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="hidden lg:block font-semibold whitespace-nowrap">School Master</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[94%] lg:w-[84%] xl:w-[86%] overflow-auto bg-[#F7F8FA] flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}