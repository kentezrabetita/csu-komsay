import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-screen'>
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-red-500'>
            Welcome to CSU - Computer Science Department
          </h1>
        </div>
      </main>
    </div>
  );
}
