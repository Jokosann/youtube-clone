import Card from '@/components/element/Card';
import MainLayout from '@/layouts/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mb-[2000px] w-full grid-card gap-x-6 gap-y-9">
        {Array.from({ length: 20 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
      ;
    </MainLayout>
  );
};

export default HomePage;
