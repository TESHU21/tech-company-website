// components/PageHeader.tsx
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  bgImage: string; // URL of the background image
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs, bgImage }) => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* ShadCN Breadcrumb */}
        <Breadcrumb className="text-white mb-2">
          {breadcrumbs.map((crumb, idx) => (
            <BreadcrumbItem key={idx}>
              {crumb.href ? (
                <BreadcrumbLink asChild>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink>{crumb.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-white text-3xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default PageHeader;
