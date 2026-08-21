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


const PERIODS = [
  "1st Term Midterm",
  "1st Term Finals",
  "2nd Term Midterm",
  "2nd Term Finals",
  "3rd Term Midterm",
  "3rd Term Finals"
];


const SUBJECTS = [
  {
    slug: "precal",
    name: "Pre Calculus",
    accent: "plum",
    lessons: [
      {
        title: "Nonlinear Systems",
        youtubeId: "L3UoupdeLag",
        notes: "Quick guide by Angelo on how to solve Nonlinear Systems.",
        period: "1st Term Finals"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "2nd Term Midterm"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "3rd Term Finals"
      }
    ]
  },
  {
    slug: "arduinotwo",
    name: "Arduino 2",
    accent: "cyan",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  },
  {
    slug: "math",
    name: "General Math",
    accent: "blue",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  },
  {
    slug: "science",
    name: "General Science",
    accent: "green",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  },
  {
    slug: "english",
    name: "Effective Comms",
    accent: "brick",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      },
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  },
  {
    slug: "physics",
    name: "Physics",
    accent: "cyan",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  },
  {
    slug: "chemistryone",
    name: "Chemistry 1",
    accent: "teal",
    lessons: [
      {
        title: "Placeholder!",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Nothing to see here yet...",
        period: "1st Term Finals"
      }
    ]
  }
];
