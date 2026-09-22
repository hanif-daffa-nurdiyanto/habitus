import { useState, type ReactNode } from "react";
import { MotionConfig, motion, type Variants } from "framer-motion";
import Card, { TestimonyCard } from "./components/card";

import Button from "./components/button";
import PlayIcon from "./assets/icons/play.svg?react";
import StarIcon from "./assets/icons/star.svg?react";
import LogoIcon from "./assets/icons/logo.svg?react";
import LogoSmallIcon from "./assets/icons/logo-sm.svg?react";
import ChartIcon from "./assets/icons/chart.svg?react";
import FireIcon from "./assets/icons/fire.svg?react";
import BellIcon from "./assets/icons/bell.svg?react";
import GoogleIcon from "./assets/icons/google.svg?react";
import SpotifyIcon from "./assets/icons/spotify.svg?react";
import TreeHouseIcon from "./assets/icons/treehouse.svg?react";
import BrazeIcon from "./assets/icons/braze.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import LockIcon from "./assets/icons/lock.svg?react";
import DropDownIcon from "./assets/icons/down-circle.svg?react";
import LinkedinIcon from "./assets/icons/linkedin.svg?react";
import InstagramIcon from "./assets/icons/instagram.svg?react";
import Dot from "./components/dot";

interface Feature {
  icon: ReactNode
  title: string
  desc: string
}

interface Testimony {
  image?: string
  name?: string
  job?: string
  text: string
}

const features: Feature[] = [
  {
    icon: <BellIcon />,
    title: 'Smart Reminders',
    desc: 'Never miss a habit again. Set daily notifications or let the app suggest the best time.'
  },
  {
    icon: <ChartIcon />,
    title: 'Progress Analytics',
    desc: 'See your growth with weekly reports, streaks, and visual heatmaps.'
  },
  {
    icon: <FireIcon />,
    title: 'Streak Tracking',
    desc: 'Stay motivated by building unbreakable streaks and unlocking milestones.'
  }
]

const testimonials: Testimony[] = [
  {
    image: 'sarah.jpg',
    name: 'Sarah T.',
    job: 'Writer',
    text: `"I've finally stayed consistent with journaling for 90 days. This app made it effortless."`
  },
  {
    image: 'james.jpg',
    name: 'James K.',
    job: 'Software Engineer',
    text: `"Seeing my progress visually keeps me motivated every day. The reminders are just perfect!"`
  },
  {
    image: 'priya.jpg',
    name: 'Priya R.',
    job: 'Wellness Coach',
    text: `"I've tried several habit trackers, but this one is the only one I actually stuck with."`
  },
]

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#inside' },
  { label: 'Blog', href: '#testimonials' },
  { label: 'Resources', href: '#faq' },
  { label: 'About Us', href: '#about' },
]

const faqItems = [
  {
    question: 'What do I get with Premium?',
    answer: 'Premium includes advanced analytics, habit templates, cloud backup, device sync, and extra themes. You can start with the free plan and upgrade whenever you are ready.',
    color: 'bg-primary',
  },
  {
    question: 'Can I try Habitus for free?',
    answer: 'Yes. The free plan lets you track unlimited habits, set daily reminders, and follow your streaks. No credit card is needed to get started.',
    color: 'bg-pink',
  },
  {
    question: 'What happens if I miss a day?',
    answer: 'Missing a day does not erase your progress. Habitus helps you see the bigger picture and pick up your routine again the next day.',
    color: 'bg-light-purple',
  },
  {
    question: 'Can I change my reminders?',
    answer: 'Of course. You can adjust the time and frequency of each reminder as your schedule changes.',
    color: 'bg-light-blue',
  },
  {
    question: 'Can I use Habitus on multiple devices?',
    answer: 'With Premium, your habits and progress can sync across your devices so your routine stays up to date wherever you check in.',
    color: 'bg-light-blue',
  },
  {
    question: 'Can I cancel Premium anytime?',
    answer: 'Yes. You can cancel your subscription at any time. Your existing habits will remain available on the free plan.',
    color: 'bg-pink',
  },
]

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}

const revealOnScroll = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
  variants: revealVariants,
} as const

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllFaqs, setShowAllFaqs] = useState(false)

  return (
  <MotionConfig reducedMotion="user">
    <motion.section initial="hidden" animate="visible" variants={revealVariants} className="p-3 pb-0 text-white sm:p-5 sm:pb-0 md:p-7.5 md:pb-0" id="hero">
      <div className="bg-primary rounded-[28px] px-5 py-6 relative isolate overflow-hidden sm:px-8 sm:py-9 md:rounded-[40px] md:px-6 md:pt-6 md:pb-72 lg:px-12.5 lg:pt-12.5 lg:pb-12.5">
        <header className="relative z-20 flex items-center justify-between mb-16 sm:mb-20 md:mb-27.5">
          <a href="#hero" className="shrink-0" aria-label="Habitus home">
            <LogoIcon />
          </a>
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-2 text-xs lg:gap-5 lg:text-sm xl:gap-7.5 xl:text-base">
              {navItems.map(({ label, href }) => (
                <li key={label}><a className="whitespace-nowrap hover:underline" href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="hidden md:flex shrink-0 justify-end">
            <Button size="sm">Login</Button>
          </div>
          <button
            type="button"
            className="flex size-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-white/60 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`h-0.5 w-5 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </header>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="absolute inset-x-5 top-22 z-30 rounded-3xl bg-dark p-5 shadow-xl sm:inset-x-8 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a className="block rounded-xl px-3 py-2.5 hover:bg-white/10" href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-white/20 pt-4"><Button size="sm" className="w-full">Login</Button></div>
        </nav>
        <div className="relative z-10 flex flex-col items-center font-medium text-center">
          <h1 className="max-w-162.5 text-[clamp(2.25rem,8vw,3.75rem)] leading-[1.05] mb-6 md:text-[60px] md:leading-15 md:mb-7.5">Build Better Habits. One Day at a Time.</h1>
          <p className="text-base leading-6 mb-8 max-w-168.25 font-normal sm:text-lg md:text-[22px] md:leading-5.5 md:mb-12.5">Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.</p>
          <div className="flex flex-col w-full max-w-xs gap-3 mb-16 sm:w-auto sm:max-w-none sm:flex-row sm:gap-5 md:mb-12 lg:mb-45.5 [&>button]:w-full sm:[&>button]:w-auto">
            <Button>Get Started Free</Button>
            <Button variant="secondary" icon={<PlayIcon />}>Watch Demo</Button>
          </div>
          <div className="bg-dark rounded-full px-4 py-2.5 flex justify-center items-center gap-2 max-w-full">
            <StarIcon />
            <span className="text-[14px]">Loved by 1M+ users worldwide</span>
          </div>

          <div className="relative mt-10 flex h-45 w-full max-w-80 justify-center md:hidden" aria-hidden="true">
            <img className="absolute left-[10%] top-4 w-34 -rotate-12 rounded-xl border-4 border-dark" src="./images/habit-tracker.png" alt="" />
            <img className="absolute right-[10%] top-0 w-34 rotate-12 rounded-xl border-4 border-dark" src="./images/dashboard.png" alt="" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-72 md:block lg:hidden" aria-hidden="true">
          <Dot className="top-8 left-[22%]" />
          <Dot color="#FEC6C7" className="top-28 left-[34%]" />
          <Dot color="#DBEDFB" className="bottom-14 left-[44%]" />
          <Dot color="#D9B8D5" className="top-6 right-[23%]" />
          <Dot color="#111827" className="top-30 right-[35%]" />
          <Dot color="#DBEDFB" className="bottom-12 right-[44%]" />

          <img className="absolute left-[15%] -bottom-18 w-32 rotate-[4.49deg] rounded-[16px] border-4 border-dark" src="./images/settings.png" alt="" />
          <img className="absolute z-10 left-[2%] -bottom-25 w-36 rotate-[-19.05deg] rounded-[16px] border-4 border-dark" src="./images/habit-tracker.png" alt="" />
          <img className="absolute right-[2%] -bottom-25 w-36 -rotate-15 rounded-[16px] border-4 border-dark" src="./images/goals.png" alt="" />
          <img className="absolute z-10 right-[18%] -bottom-18 w-32 rotate-[13.88deg] rounded-[16px] border-4 border-dark" src="./images/dashboard.png" alt="" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block" aria-hidden="true">
          <Dot className="bottom-112.75 left-39.75" />
          <Dot color="#FEC6C7" className="bottom-76.5 left-70" />
          <Dot color="#DBEDFB" className="bottom-63.5 left-73.75" />
          <Dot color="#D9B8D5" className="bottom-112.75 right-51.75" />
          <Dot color="#111827" className="bottom-79.75 right-60.75" />
          <Dot color="#DBEDFB" className="bottom-26.5 right-117.75" />

          <img className="absolute left-40 -bottom-70 border-7 border-dark rounded-[20px] rotate-[4.49deg] w-55 h-[476.12px]" src="./images/settings.png" alt="" />
          <img className="absolute left-9 -bottom-45 border-7 border-dark rounded-[20px] rotate-[-19.05deg] w-55 h-[476.12px]" src="./images/habit-tracker.png" alt="" />
          <img className="absolute -bottom-45 right-0 border-7 border-dark rounded-[20px] -rotate-15 w-55 h-[476.12px]" src="./images/goals.png" alt="" />
          <img className="absolute -bottom-77.5 right-47.5 border-7 border-dark rounded-[20px] rotate-[13.88deg] w-55 h-[476.12px]" src="./images/dashboard.png" alt="" />
        </div>
      </div>
    </motion.section>

    <motion.section {...revealOnScroll} className="px-5 mt-16 sm:px-8 md:px-12 md:mt-27.5 lg:px-25" id="features">
      <div className="flex flex-col gap-3 mb-8 md:flex-row md:justify-between md:items-center md:mb-12.25">
        <h2 className="text-4xl leading-tight font-bold sm:text-5xl md:text-[60px]">Why you’ll love it</h2>
        <p className="font-light text-base sm:text-lg md:text-[20px]">Designed to help you stay on track, effortlessly.</p>
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10" variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {features.map((feature, i) => (
          <motion.div key={i} className="h-full" variants={revealVariants}>
            <Card {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    <motion.section {...revealOnScroll} className="px-5 mt-10 grid grid-cols-1 gap-8 sm:px-8 md:pl-12 md:pr-0 md:mt-10.25 md:grid-cols-2 md:gap-8 lg:pl-25 lg:gap-15">
      <div className="w-full bg-light-blue rounded-[28px] h-85 overflow-hidden pt-10 flex justify-center md:rounded-[40px] md:h-140 md:pt-18.5">
        <img src="./images/habit-tracker.png" alt="Habit tracker app screen" className="h-auto w-48 object-cover border-[7px] border-dark rounded-[20px] md:w-55" />
      </div>
      <div className="min-w-0 pt-0 flex flex-col justify-between gap-8 w-full md:pt-6.25">
        <p className="text-2xl leading-tight font-medium md:text-[clamp(1.5rem,3vw,2.25rem)] md:pr-8 lg:pr-25">Join thousands of users from top companies using Habitus to build better habits</p>
        <div className="w-full overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="w-max flex items-center gap-8 bg-background rounded-[28px] px-8 py-7 md:gap-11 md:rounded-[40px] md:px-14.5 md:py-11">
            <GoogleIcon />
            <SpotifyIcon />
            <TreeHouseIcon />
            <BrazeIcon />
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section {...revealOnScroll} className="mt-16 md:mt-27.5" id="inside">
      <div className="flex flex-col justify-between items-center text-center px-5 mb-10 sm:px-8 md:mb-20">
        <h2 className="text-4xl leading-tight font-bold sm:text-5xl md:text-[60px]">Take a Look Inside</h2>
        <p className="font-light text-base sm:text-lg md:text-[20px]">A simple, beautiful interface built for everyday use.</p>
      </div>
      <div className="w-full overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 w-max px-5 sm:px-8 md:gap-10 md:px-12 lg:px-25">
          <div className="h-130 w-70 pt-11 relative overflow-hidden">
            <div className=" absolute left-9 top-20
              h-57.5 w-75
              rotate-[-34deg]
              rounded-[50px]
              bg-light-purple"
            />
            <div className="absolute inset-x-0 bottom-0 top-37.5 rounded-[70px_70px_40px_40px] bg-light-purple" />
            <div className="px-13.5 pt-14.25 absolute top-11">
              <img src="./images/dashboard.png" alt="habit-tracker" className="border-4 border-dark rounded-[20px]" />
            </div>
          </div>
          <div className="h-130 w-70 pt-11 relative overflow-hidden">
            <div className=" absolute left-9 top-20
              h-57.5 w-75
              rotate-[-34deg]
              rounded-[50px]
              bg-primary"
            />
            <div className="absolute inset-x-0 bottom-0 top-37.5 rounded-[70px_70px_40px_40px] bg-primary" />
            <div className="px-13.5 pt-14.25 absolute top-11">
              <img src="./images/habit-tracker.png" alt="habit-tracker" className="border-4 border-dark rounded-[20px]" />
            </div>
          </div>
          <div className="h-130 w-70 pt-11 relative overflow-hidden">
            <div className=" absolute left-9 top-20
              h-57.5 w-75
              rotate-[-34deg]
              rounded-[50px]
              bg-dark"
            />
            <div className="absolute inset-x-0 bottom-0 top-37.5 rounded-[70px_70px_40px_40px] bg-dark" />
            <div className="px-13.5 pt-14.25 absolute top-11">
              <img src="./images/settings.png" alt="habit-tracker" className="border-4 border-dark rounded-[20px]" />
            </div>
          </div>
          <div className="h-130 w-70 pt-11 relative overflow-hidden">
            <div className=" absolute left-9 top-20
              h-57.5 w-75
              rotate-[-34deg]
              rounded-[50px]
              bg-light-blue"
            />
            <div className="absolute inset-x-0 bottom-0 top-37.5 rounded-[70px_70px_40px_40px] bg-light-blue" />
            <div className="px-13.5 pt-14.25 absolute top-11">
              <img src="./images/goals.png" alt="habit-tracker" className="border-4 border-dark rounded-[20px]" />
            </div>
          </div>
          <div className="h-130 w-70 pt-11 relative overflow-hidden">
            <div className=" absolute left-9 top-20
              h-57.5 w-75
              rotate-[-34deg]
              rounded-[50px]
              bg-pink"
            />
            <div className="absolute inset-x-0 bottom-0 top-37.5 rounded-[70px_70px_40px_40px] bg-pink" />
            <div className="px-13.5 pt-14.25 absolute top-11">
              <img src="./images/dashboard.png" alt="habit-tracker" className="border-4 border-dark rounded-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section {...revealOnScroll} className="mt-16 px-5 sm:px-8 md:mt-27.5 md:px-12 lg:px-25" id="testimonials">
      <div className="flex flex-col justify-between items-start gap-3 mb-9 md:mb-17.5">
        <h2 className="text-4xl leading-tight font-bold sm:text-5xl md:text-[60px]">What our users say</h2>
        <p className="font-light text-base sm:text-lg md:text-[20px]">Real stories from people who turned their goals into habits.</p>
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10" variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        {testimonials.map((testimony, index) => (
          <motion.div key={index} className="h-full" variants={revealVariants}>
            <TestimonyCard {...testimony} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>

    <motion.section {...revealOnScroll} className="bg-light-blue rounded-[28px] mx-5 mt-16 p-6 sm:mx-8 sm:p-10 md:rounded-[40px] md:mx-12 md:mt-27.5 md:p-12 lg:mx-25 lg:p-20">
      <div className="mb-12 md:mb-25">
        <LogoSmallIcon />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
        <p className="text-[clamp(2.5rem,7vw,5.3125rem)] leading-[1.05]">Ready to build better habits?</p>
        <div className="flex gap-7 md:gap-15.25 flex-col items-start md:items-end">
          <p className="text-left md:text-right text-base sm:text-lg md:text-[20px] max-w-121">Take control of your daily routines, stay consistent with the goals that matter, and build meaningful progress — one habit at a time. With Habitus, you’re just a step away from creating a better version of yourself. </p>
          <Button className="w-full sm:w-fit" variant="cta" size="sm">Start Tracking – It’s Free</Button>
        </div>
      </div>
    </motion.section>

    <motion.section {...revealOnScroll} className="mt-16 px-5 sm:px-8 md:mt-27.5 md:px-12 lg:px-25" id="pricing">
      <div className="flex flex-col justify-between items-start gap-3 mb-9 md:mb-17.5">
        <h2 className="text-4xl leading-tight font-bold sm:text-5xl md:text-[60px]">Simple, transparent pricing</h2>
        <p className="font-light text-base sm:text-lg md:text-[20px]">Start free. Upgrade when you're ready.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 h-full">
        <div className="w-full rounded-[28px] p-7 bg-background flex flex-col sm:p-10 md:rounded-[40px] lg:p-17.5 lg:pb-24.25">
          <div className="mb-13">
            <h3 className="text-[24px] font-semibold">Free</h3>
            <p className="text-[16px] font-normal text-muted">Perfect to get started</p>
          </div>
          <div className="flex-1 mb-12.5">
            <div className="text-[36px] font-bold mb-6">$0</div>
            <ul>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Track unlimited habits</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Daily reminders</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Streaks & basic analytics</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Light & dark mode</li>
              <li className="flex gap-3 mb-4.5 items-center"><LockIcon /> No credit card required</li>
            </ul>
          </div>
          <div className="w-full"><Button variant="dark" className="w-full">Start for Free</Button></div>
        </div>
        <div className="w-full rounded-[28px] p-7 bg-dark text-white h-full flex flex-col sm:p-10 md:rounded-[40px] lg:p-17.5 lg:pb-24.25">
          <div className="flex justify-between">
            <div className="mb-13">
              <h3 className="text-[24px] font-semibold">Premium</h3>
              <p className="text-[16px] font-normal text-[#9CA3AF]">All features you need</p>
            </div>
            <div className="bg-primary h-fit rounded-full py-1.25 px-3 text-[14px]">Popular</div>
          </div>
          <div className="flex-1 mb-12.5">
            <div className="text-[36px] font-bold mb-6">$4.99 <span className="text-[#9CA3AF] text-[16px] font-normal">/month</span></div>
            <ul>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Everything in Free</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Advanced analytics</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Habit templates & suggestions</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Cloud backup & device sync</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Premium themes and icons</li>
              <li className="flex gap-3 mb-4.5 items-center"><CheckIcon /> Everything in Free</li>
            </ul>
          </div>
          <div className="w-full"><Button className="w-full">Upgrade Now</Button></div>
        </div>

      </div>
    </motion.section>

    <motion.section {...revealOnScroll} className="mt-16 px-5 w-full sm:px-8 md:mt-27.5 md:px-12 lg:px-25" id="faq">
      <div className="flex flex-col justify-between items-center text-center gap-3 mb-10 md:mb-20">
        <h2 className="text-4xl leading-tight font-bold max-w-175 sm:text-5xl md:text-[60px]">Frequently Asked Questions</h2>
        <p className="font-light text-base sm:text-lg md:text-[20px]">Everything you need to know before getting started</p>
      </div>
      <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-x-5 md:gap-x-10 gap-y-4 md:gap-y-7.5 mb-7.5">
        {faqItems.slice(0, showAllFaqs ? faqItems.length : 4).map(({ question, answer, color }) => (
          <details key={question} className={`group overflow-hidden rounded-[28px] md:rounded-[40px] ${color}`}>
            <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark md:px-10 md:py-9 [&::-webkit-details-marker]:hidden">
              <span className="shrink-0 transition-transform duration-200 group-open:rotate-180"><DropDownIcon /></span>
              <span className="text-lg font-medium md:text-[20px]">{question}</span>
            </summary>
            <div className="px-6 pb-6 md:px-10 md:pb-9">
              <p className="border-t border-dark/15 pt-5 text-base leading-relaxed text-dark/80">{answer}</p>
            </div>
          </details>
        ))}
      </div>
      <button type="button" className="block ml-auto cursor-pointer text-right underline text-[18px] font-normal underline-offset-4" aria-expanded={showAllFaqs} onClick={() => setShowAllFaqs(!showAllFaqs)}>
        {showAllFaqs ? 'Show fewer FAQs' : 'View All FAQs'}
      </button>
    </motion.section>

    <motion.footer {...revealOnScroll} className="mt-16 px-5 w-full mb-5 text-muted sm:px-8 md:mt-20 md:px-12 md:mb-25 lg:px-25" id="about">
      <div className="bg-dark w-full rounded-[28px] md:rounded-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 pt-10 px-7 pb-10 gap-x-5 gap-y-10 md:pt-17.5 md:px-12.5 md:pb-16">
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-y-7.5">
            <LogoIcon />
            <p className="max-w-68">Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.</p>
            <div className="flex gap-5">
              <a href="#"><LinkedinIcon /></a>
              <a href="#"><InstagramIcon /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-6.5">Product</h3>
            <ul className="flex flex-col gap-4 text-[16px] font-normal">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-6.5">Company</h3>
            <ul className="flex flex-col gap-4 text-[16px] font-normal">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-white text-[16px] font-semibold mb-6.5">Newsletter</h3>
            <p className="mb-5">Get tips & updates in your inbox</p>
            <form action="">
              <input type="text" className="rounded-full border border-[#374151] placeholder:text-muted bg-[#1F2937] text-white w-full mb-3.5 px-6.5 py-2.5 leading-6 focus:outline-none" placeholder="Enter your email" />
              <Button className="w-full" variant="cta" size="sm">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="text-[#6B7280] w-full text-center pt-8.25 pb-7.25 border-t border-[#1F2937]">© {new Date().getFullYear()} Habitus. All rights reserved.</div>
      </div>
    </motion.footer>
  </MotionConfig>
  )
}

export default App;
