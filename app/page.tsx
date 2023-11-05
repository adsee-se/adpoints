import { GetServerSideProps } from "next";

interface Item {
  id: string;
  name: string;
}

interface Items extends Item {
  items: Item[];
}

const Home = async ({ items }: Items) => {
  const fetchItems = async (): Promise<Item[]> => {
    const response = await fetch("http://127.0.0.1:3000/items");
    const data = await response.json();
    return data;
  };
  const Items = await fetchItems();
  return (
    <main>
      <div className="font-bold underline">ADPOINTS DEVELOPMENT START</div>
      {Items.map((item) => (
        <p>{item.name}</p>
      ))}
    </main>
  );
};

export default Home;
