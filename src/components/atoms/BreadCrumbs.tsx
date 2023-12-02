import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

const BreadCrumb = ({ params }: any) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <BreadcrumbItem href="/" icon={HiHome}>
        Home
      </BreadcrumbItem>
      {params?.category && (
        <BreadcrumbItem href={`/${params.category}`}>
          {decodeURIComponent(params.category)}
        </BreadcrumbItem>
      )}
      {params?.id && params?.category && (
        <BreadcrumbItem href={`/${params.category}/${params.id}`}>
          {params.id}
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
export default BreadCrumb;
