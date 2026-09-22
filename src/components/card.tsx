import type { ReactNode } from "react"

interface CardProps {
  icon?: ReactNode
  title?: ReactNode
  desc?: ReactNode
}

interface TestimonyProps {
  image?: string
  name?: string
  job?: string
  text: string
}

const Card = ({ icon, title, desc }: CardProps) => (
  <article className="flex h-full flex-col p-7 bg-background rounded-[28px] md:rounded-[40px] lg:p-12.5">
    <div className="mb-6.25">{icon}</div>
    <h3 className="font-semibold text-dark text-[20px] mb-3.75">{title}</h3>
    <p className="text-muted font-normal text-[16px]">{desc}</p>
  </article>
)

const TestimonyCard = ({ image, name, job, text }: TestimonyProps) => (
  <article className="flex h-full flex-col p-7 bg-background rounded-[28px] md:rounded-[40px] lg:p-12.5">
    <div className="flex gap-4 mb-7.5 items-center">
      <img src={'./images/' + image} alt={name} className="w-12 h-12 rounded-full" />
      <div className="flex flex-col gap-1">
        <h3 className=" text-dark font-bold text-[16px]">{name}</h3>
        <p className="text-muted font-normal text-[16px]">{job}</p>
      </div>
    </div>
    <p className="text-muted font-normal text-[16px]">{text}</p>
  </article>
)

export default Card;
export { TestimonyCard }
