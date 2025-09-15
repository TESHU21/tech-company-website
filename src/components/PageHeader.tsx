import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, bgImage }) => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[500px] bg-origin-content bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className=" flex flex-col items-center gap-10 justify-center relative z-10 container mx-auto px-4">
        {/* Breadcrumb */}
        <Breadcrumb className="flex i gap-1 text-white mb-2">
          {breadcrumbs.map((crumb, idx) => (
            <BreadcrumbItem key={idx} className="hover:text-primary">
              {crumb.href ? (
                <BreadcrumbLink asChild>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink>{crumb.label}</BreadcrumbLink>
              )}

              {/* Separator except for last item */}
              {idx < breadcrumbs.length - 1 && (
                
                  <SlashIcon className="w-4 h-4 text-white" />
                
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-white text-3xl md:my-12 md:text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
