import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
      `*[_type == 'startup' && defined(slug.current) && !defined($search) || category match $search || founder->name match $search || title match $search] | order(_createdAt desc) {
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                  _id, name, image, bio
            },

            views,
            description,
            category,
            image
      }`
)

export const FIND_STARTUP_BY_ID = defineQuery(
      `*[_type == "startup" && _id == $id][0] {
          _id,
          title,
          slug,
          _createdAt,
          founder -> {
            _id,
            name,
            image,
            username
          },
          description,
          category,
          image,
          views,
          pitch
      }`
)

export const STARTUP_VIEWS_QUERY = defineQuery(
      `
            *[_type == "startup" && _id == $id][0] {
                  _id,
                  views
            }
      `
)

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
      `
            *[_type == 'founder' && $id == id][0] {
                  _id,
                  id,
                  name,
                  username,
                  image,
                  email,
                  bio
            }
      `
)

export const AUTHOR_BY_ID_QUERY = defineQuery(
      `
            *[_type == 'founder' && _id == $id][0] {
                  _id,
                  id,
                  name,
                  username,
                  image,
                  email,
                  bio
            }
      `
)

export const STARTUPS_BY_AUTHOR = defineQuery(
      `*[_type == 'startup' && founder._ref == $id] | order(_createdAt desc) {
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                  _id, name, image, bio
            },

            views,
            description,
            category,
            image
      }`
)