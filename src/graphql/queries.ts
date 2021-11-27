import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      heading
      slug
      projectType
      tags
      image {
        id
        url
      }
    }
  }
`

export const GET_PAGES = gql`
  query getPages($first: Int) {
    projects(first: $first) {
      id
      slug
      heading
      tags
      image {
        url
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      heading
      tags
      description
      visitUrl
      siteImage {
        url
        width
        height
      }
      image {
        url
      }
    }
  }
`
