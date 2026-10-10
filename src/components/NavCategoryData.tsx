import NavCategroy from "./NavCategroy";
import type { ICategory } from "./categoryLinks";

export default async function NavCategoryData() {
  let categories: ICategory[] = [];
  let errorMessage: string | null = null;

  try {
    const res = await fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories",
      { next: { revalidate: 3600 } },
    );

    if (!res.ok) {
      console.error("Category API error:", res.status);
      errorMessage = "Failed to load categories.";
    } else {
      const result = await res.json();

      // Adjust this if your API returns a different structure.
      const data = Array.isArray(result) ? result : result.data;

      if (!Array.isArray(data)) {
        console.error("Invalid categories response:", result);
        errorMessage = "Categories data is invalid.";
      } else {
        categories = data;
      }
    }
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    errorMessage = "Unable to load categories.";
  }

  if (errorMessage) return <p>{errorMessage}</p>;

  return <NavCategroy categories={categories} />;
}
