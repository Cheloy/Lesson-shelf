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
        title: "Solving for X",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Basic one-step and two-step equations."
      },
      {
        title: "Intro to Percentages",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Percent, decimal, and fraction — how they relate."
      }
    ]
  },
  {
    slug: "science",
    name: "Science",
    accent: "teal",
    lessons: [
      {
        title: "The Water Cycle",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Evaporation, condensation, precipitation, collection."
      },
      {
        title: "Cells 101",
        youtubeId: "dQw4w9WgXcQ",
        notes: "Plant vs animal cells and their main parts."
      }
    ]
  },
  {
    slug: "english",
    name: "English",
    accent: "plum",
    lessons: [
      {
        title: "Writing a Thesis Statement",
        youtubeId: "dQw4w9WgXcQ",
        notes: "How to turn a topic into an arguable claim."
      },
      {
        title: "Comma Rules That Actually Matter",
        youtubeId: "dQw4w9WgXcQ",
        notes: "The 4 comma rules that fix 90% of mistakes."
      }
    ]
  }
];
