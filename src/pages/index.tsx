import client from 'graphql/client'
import { GET_PROJECTS } from 'graphql/queries'
import HomeTemplate from 'templates/Home'

interface Iprojects {
  projects: {
    id: string
    heading: string
    slug: string
    projectType: string
    image: {
      id: string
      url: string
      width: string
      height: string
    }
  }[]
}

export default function Home({ projects }: Iprojects) {
  return <HomeTemplate projects={projects} />
}

export const getStaticProps = async () => {
  const { projects } = await client.request(GET_PROJECTS)

  return {
    revalidate: 60 * 60 * 24,
    props: {
      projects
    }
  }
}
