/*
  ============================================
  THIS IS THE ONLY FILE YOU NEED TO EDIT
  TO ADD, REMOVE, OR REORGANIZE VIDEOS.
  ============================================

  Structure:

  SUBJECTS = [
    {
      slug: "math",              <- used in the URL, no spaces, lowercase
      name: "Math",              <- shown on screen
      accent: "amber",           <- one of: amber, teal, plum, brick
      lessons: [
        {
          title: "Nonlinear Systems",
          youtubeId: "L3UoupdeLag",   <- the part after watch?v= in a YouTube URL
          notes: "Quick guide by Angelo on how to solve Nonlinear Systems."
        },
        ... more lessons ...
      ]
    },
    ... more subjects ...
  ]

  TO ADD A VIDEO:
    1. Upload it to YouTube as "Unlisted"
    2. Copy the ID from the URL (e.g. youtube.com/watch?v=ABC123 -> ABC123)
    3. Add a new { title, youtubeId, notes } entry to the right subject's lessons array

  TO REMOVE A VIDEO:
    Delete its { ... } entry.

  TO ADD A WHOLE NEW SUBJECT:
    Copy one of the subject blocks below, give it a new slug/name/accent,
    and fill in its lessons.
*/

const SUBJECTS = [
  {
    slug: "math",
    name: "Math",
    accent: "amber",
    lessons: [
      {
        title: "Nonlinear Systems",
        youtubeId: "L3UoupdeLag",
        notes: "Quick guide by Angelo on how to solve Nonlinear Systems."
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      }
    ]
  },
  {
    slug: "science",
    name: "Science",
    accent: "teal",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      }
    ]
  },
  {
    slug: "english",
    name: "English",
    accent: "plum",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet..."
      }
    ]
  }
];
