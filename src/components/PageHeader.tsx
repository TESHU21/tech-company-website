import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import { Header } from "./Header";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, bgImage }) => {
  return (
    <div className="relative w-full max-w-8xl mx-auto border-b ">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Optimized Background */}
        <Image
          src={bgImage}
          alt="Page background"
          fill
          priority={false} // lazy load
          placeholder="blur"
          blurDataURL="/images/placeholder.jpg" // tiny low-res version
          sizes="100vw"
          className="object-cover object-right"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-950/70 dark:bg-black/85" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-6">
          {/* Breadcrumb */}
          <Breadcrumb className="flex gap-1 text-white mb-2">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <BreadcrumbItem>
                  {crumb.href ? (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbLink>{crumb.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {idx < breadcrumbs.length - 1 && (
                  <SlashIcon className="w-4 h-4 text-white" />
                )}
              </div>
            ))}
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-primary text-3xl md:text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
