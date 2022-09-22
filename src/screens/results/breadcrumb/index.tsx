import * as BreadcrumbStyles from "./styles";

interface BreadcrumbProps {
  categories?: string[];
}

export default function Breadcrumb({ categories }: BreadcrumbProps) {
  if (!categories) return null;

  return (
    <BreadcrumbStyles.Container>
      <ol itemType="http://schema.org/BreadcrumbList">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </BreadcrumbStyles.Container>
  );
}
