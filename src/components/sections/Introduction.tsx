import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

// JSON data for cards
const cardData = [
  {
    id: 1,
    title: 'Skills',
    description: 'MERN Stack Developer',
    subtitle: 'Full-stack development with modern JavaScript ecosystem',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Experience',
    description: '8+ Years Experience',
    subtitle: 'Building scalable applications and leading development teams',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Education',
    description: 'Bachelor Completed 2017',
    subtitle: 'Strong academic foundation in computer science',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Projects',
    description: '12+ Projects Completed',
    subtitle: 'Diverse portfolio of web applications and solutions',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
]

export const IntroductionComp = async () => {
  return (
    <section className="min-h-screen w-full  flex items-center">
      <div className="px-4 w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl py-2 mx-auto w-4/5 lg:w-2/3 px-2  font-extrabold bg-[var(--heading-primary)] text-white/80 tracking-tight text-balance mb-6">
            Welcome, I'm Rahul
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            A passionate MERN Stack Developer crafting digital experiences with modern web
            technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              MongoDB
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Express.js
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              React.js
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Node.js
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              TypeScript
            </Badge>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cardData.map((card) => (
            <Card
              key={card.id}
              className={`group hover:shadow-xl  py-6 transition-all duration-300 hover:-translate-y-2 border-0 bg-[var(--card)] dark:bg-slate-800/80 backdrop-blur-sm`}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br bg-[var(--background-secondary)] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {card.icon}
                </div>
                <CardTitle className="text-xl text-white/70">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg font-medium text-white/80 dark:text-slate-300">
                  {card.description}
                </CardDescription>
                <p className="text-sm text-white/60 dark:text-slate-400 mt-2">{card.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
