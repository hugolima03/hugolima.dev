import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

import PageTemplate from 'templates/Pages'

interface PageProps {
  heading: string
  tags: string[]
  description: string
  visitUrl: string
  photoUrl: {
    url: string
    width: string
    height: string
  }
}

export default function Page({
  heading,
  tags,
  description,
  photoUrl,
  visitUrl
}: PageProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <PageTemplate
      heading={heading}
      tags={tags}
      description={description}
      image={photoUrl}
      visitUrl={visitUrl}
    />
  )
}

interface Test {
  slug: string
}

export async function getStaticPaths() {
  const { projects } = await client.request(GET_PAGES, { first: 6 })

  const paths = projects.map(({ slug }: Test) => ({
    params: { slug }
  }))

  console.log(paths)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!project) return { notFound: true }

  return {
    revalidate: 60 * 60 * 24,
    props: {
      heading: project.heading,
      tags: project.tags,
      description: project.description,
      photoUrl: project.siteImage,
      visitUrl: project.visitUrl
    }
  }
}
