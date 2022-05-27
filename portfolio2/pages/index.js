import Head from 'next/head'
import Image from 'next/image'
import Entries from '../components/Entries'
import Header from '../components/Header'
import Entry from '../components/Entry' // 追加entryコンポーネント
import Footer from '../components/Footer'

export default function Home(props) {
  console.log(props.entries)
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* 取得した記事分回してEntryコンポーネント表示する */}
        <Entries>
          {props.entries.contents.map((entry) => {
            return <Entry entry={entry} key={entry.id}></Entry>
          })}
        </Entries>
      </main>

      <Footer />

    </div>
  )
}

import { client } from '../utils/client';
export const getStaticProps = async () => {
  const [entries] = await Promise.all([
    client.get({
      endpoint: 'entries',
      queries: {
        orders: '-publishedAt',
        offset: 0,
        limit: 10,
        // fields: 'id,title,categories,tags,publishedAt,image,description'
      }
    })
  ])

  return {
    props: {
      entries
    },
  };
};