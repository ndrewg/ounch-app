import Header from '@/app/ui/Header/Header';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { fetchItems } from './lib/data';
import Cards from './Cards/Cards';

const Home = async () => {
  const items = await fetchItems();

  return (
    <main className='w-full'>
      <Header />
      <div className='p-5 md:p-10'>
        <h1 className='text-4xl font-bold mb-5'>Items</h1>
        <Cards items={items} />
      </div>
    </main>
  );
};

export default Home;
