import Head from 'next/head';

// STYLES
import styles from '../styles/Home.module.css';

// COMPONENTS
import Progress from '../components/progress';
import ProjectNavigation from '../components/projectNavigation';

const CRM = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ProjectNavigation />
        <Progress />
      </main>
    </div>
  );
};

export default CRM;
