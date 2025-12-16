import { Blocks, Code2, Palette, Sparkles, Terminal, Zap } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Open Source",
    description: "The code is yours. Copy and paste into your project and customize to your needs.",
  },
  {
    icon: Palette,
    title: "Themeable",
    description: "Designed with a default style that you can easily customize to match your brand.",
  },
  {
    icon: Blocks,
    title: "Composable",
    description: "Built on top of Radix UI primitives for full accessibility and composability.",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "No runtime. No dependencies. Just copy the code and use it.",
  },
  {
    icon: Terminal,
    title: "CLI",
    description: "A CLI to add components to your project with one command.",
  },
  {
    icon: Sparkles,
    title: "Beautiful",
    description: "Designed to look great out of the box. Easy to customize.",
  },
]

export function FeaturesSection() {
  return (
    <section className="container space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          shadcn/ui is a collection of re-usable components that you can copy and
          paste into your apps. Components are styled with Tailwind CSS and built
          on top of Radix UI.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-lg border bg-background p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              <feature.icon className="h-6 w-6" />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="font-bold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

