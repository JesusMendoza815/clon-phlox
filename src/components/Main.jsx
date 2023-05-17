import { BASE_URL } from "../constants/contansts";
import { useFetch } from "../hooks/useFetch";
import Banners from "./Banners";
import CardCategory from "./CardCategory";
const colors = ["#363636", "#f32c37", "#eeeff3", "#2dd06f"];

export default function Main() {
  let { data, error } = useFetch(`${BASE_URL}/categories`);

  return (
    <>
      <main className="flex flex-wrap justify-between mt-7">
        {error ? (
          data.map((category, i) => {
            return (
              <CardCategory
                categoryData={category}
                key={category}
                bgColor={colors[i]}
              />
            );
          })
        ) : (
          <h3>Something wrong</h3>
        )}
      </main>
      <Banners />
    </>
  );
}
