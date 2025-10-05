import httpinstance from "@/utils/http.js";

export function getCategoryList(id) {
  return httpinstance({
    url: "/category",
     params: {
            id
        }
  })
}
