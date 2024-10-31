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