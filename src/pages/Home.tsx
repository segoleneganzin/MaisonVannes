import Hero from '../layouts/Hero';
import PageLayout from '../layouts/templates/PageLayout';
import ErrorBoundary from '../components/ErrorBoundary';
import Presentation from '../layouts/sections/Presentation';
import Opportunities from '../layouts/sections/Opportunities';
import Location from '../layouts/sections/Location';

const Home = () => {
  return (
    <ErrorBoundary>
      <PageLayout mainClassName='home'>
        <>
          <Hero />
          <Presentation />
          <Opportunities />
          <Location />
        </>
      </PageLayout>
    </ErrorBoundary>
  );
};

export default Home;
