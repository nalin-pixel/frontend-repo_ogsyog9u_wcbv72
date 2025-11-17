import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail, Menu, Star, Download, Shield, Sparkles, Workflow, Mic, Cloud, Boxes, Rocket } from 'lucide-react'
import api from './lib/api'
import './index.css'

function useParallax(ref, range = [0, 100]) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], range)
  return y
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-orange-300 shadow-inner" />
          <span className="text-white font-semibold tracking-wide">FreeDAIY</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#downloads" className="hover:text-white transition">Free Resources</a>
          <a href="#products" className="hover:text-white transition">Digital Products</a>
          <a href="#hire" className="hover:text-white transition">Hire Us</a>
          <a href="#blog" className="hover:text-white transition">Blog</a>
        </div>
        <button className="md:hidden text-white/80"><Menu size={20} /></button>
      </div>
    </div>
  )
}

function Hero() {
  const ref = useRef(null)
  const y = useParallax(ref, [0, 80])
  return (
    <section ref={ref} className="relative min-h-[95vh] overflow-hidden bg-[#0b0c10] text-white">
      <div className="absolute inset-0 -z-10 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
      </div>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(251,146,60,0.15),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 relative">
        <motion.div style={{ y }} className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/70">
            Build hands-free systems powered by your own AI.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
            Hands-free productivity with private, powerful AI. We design calm, reliable automations, voice interfaces, and self-hosted AI that protect your data.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#hire" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold hover:scale-[1.02] active:scale-[.99] transition">
              Hire FreeDAIY Experts <ArrowRight size={18} />
            </a>
            <a href="#downloads" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-orange-400 text-white px-5 py-3 font-semibold hover:opacity-95 transition">
              Explore Free Automations <Download size={18} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-white/60 text-sm">
            <Shield size={16} /> Private-first
            <Sparkles size={16} /> Calm UX
            <Star size={16} /> Reliable
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { title: 'Voice Interfaces & Hands-Free Productivity', icon: Mic, desc: 'Design voice-first flows that remove clicks and context switching.' },
    { title: 'Self-Hosted AI & Private Infrastructure', icon: Cloud, desc: 'Own your models and keep data in your private cloud.' },
    { title: 'n8n & Make.com Automations', icon: Workflow, desc: 'Reliable, observable workflows with retries and alerts.' },
    { title: 'AI Apps, Tools & Integrations', icon: Boxes, desc: 'Custom apps, API integrations, and internal tools.' },
    { title: 'Strategy & Consulting', icon: Rocket, desc: 'Roadmaps, audits, and pilots that ship quickly.' },
  ]
  return (
    <section id="services" className="relative bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What We Do</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Private, reliable automation and AI systems designed for focus and flow.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} whileHover={{ y: -6, scale: 1.01 }} className="group rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-400 via-sky-300 to-orange-300 flex items-center justify-center">
                <Icon size={20} className="text-black" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
              <div className="mt-4 text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">Lift to reveal details →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DeepDive() {
  const cards = [
    { title: 'Voice & Hands-Free Productivity', blurb: 'Voice agents, meeting control, dictation-first flows.' },
    { title: 'Self-Hosted AI & Private Cloud', blurb: 'LLM gateways, vector stores, secure deployments.' },
    { title: 'Automation Workflows (n8n, Make.com)', blurb: 'Reliable pipelines with tracing and retries.' },
    { title: 'AI Apps & Innovation Lab', blurb: 'Rapid prototypes to production-grade tools.' },
  ]
  return (
    <section className="bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold">Focus Areas</h2>
          <span className="text-sm text-white/60">Swipe horizontally</span>
        </div>
        <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 min-w-max pr-6">
            {cards.map((c) => (
              <motion.a key={c.title} href="#hire" whileHover={{ y: -6 }} className="w-[320px] shrink-0 rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-400 via-sky-300 to-orange-300" />
                <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-sky-300">Learn more <ArrowRight size={16} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Downloads() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [resources, setResources] = useState([])
  useEffect(() => { api.resources().then(setResources).catch(() => {}) }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('')
    try {
      await api.subscribe(email)
      setStatus('Success! Check your inbox soon.')
      setEmail('')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="downloads" className="bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold">Free Downloads</h2>
            <p className="text-white/70 mt-2 max-w-xl">Get free workflows, infographics, and templates that demystify automation and AI.</p>
            <form onSubmit={onSubmit} className="mt-6 flex gap-3">
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Your email" className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-3 placeholder-white/50 focus:outline-none" />
              <button className="rounded-full bg-white text-black px-5 py-3 font-semibold">Subscribe</button>
            </form>
            {status && <p className="mt-2 text-sm text-white/70">{status}</p>}
          </div>
          <div className="flex-[1.2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <div key={r.id} className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:scale-[1.01] transition">
                <div className="text-xs text-white/60">{r.tags.join(' • ')}</div>
                <div className="mt-2 text-lg font-semibold">{r.title}</div>
                <div className="text-white/70 text-sm mt-1">{r.blurb}</div>
                <button className="mt-4 text-sm text-sky-300 inline-flex items-center gap-1">Download <Download size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Products() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'CRM', 'Operations', 'Marketing']
  useEffect(() => { api.products().then(setProducts).catch(() => {}) }, [])
  const visible = products.filter(p => filter === 'All' || p.tag === filter)
  return (
    <section id="products" className="bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Digital Products & Templates</h2>
          <div className="flex gap-2">
            {filters.map(f => (
              <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm border ${filter===f? 'bg-white text-black border-white':'border-white/20 text-white/80'}`}>{f}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visible.map(p => (
            <div key={p.id} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-xs text-white/60">{p.tag} • {p.level}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <div className="text-white/70 text-sm mt-1">{p.description}</div>
              <button className="mt-4 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold">Get template</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hire() {
  const [form, setForm] = useState({ name:'', email:'', company:'', current_tools:'', message:'' })
  const [sent, setSent] = useState('')
  const onSubmit = async (e)=>{
    e.preventDefault(); setSent('')
    try { await api.lead(form); setSent('We received your request. We’ll be in touch.'); setForm({ name:'', email:'', company:'', current_tools:'', message:'' }) } catch(e){ setSent('Something went wrong. Please try again.') }
  }
  const steps = ['Discover','Design','Build','Iterate']
  return (
    <section id="hire" className="bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Hire FreeDAIY Experts</h2>
        <p className="text-white/70 mt-2 max-w-2xl">Done-for-you automation systems, private AI, and ongoing support.</p>
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="grid grid-cols-4 gap-3">
              {steps.map((s, i) => (
                <div key={s} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <div className="text-xs text-white/60">Step {i+1}</div>
                  <div className="font-semibold">{s}</div>
                </div>
              ))}
            </div>
            <form onSubmit={onSubmit} className="mt-6 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 w-full" />
                <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 w-full" />
              </div>
              <input value={form.company} onChange={e=>setForm({...form, company:e.target.value})} placeholder="Company" className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 w-full" />
              <input value={form.current_tools} onChange={e=>setForm({...form, current_tools:e.target.value})} placeholder="Current tools (comma separated)" className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 w-full" />
              <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="What do you want to automate or build?" rows="4" className="rounded-lg bg-white/10 border border-white/20 px-4 py-3 w-full" />
              <button className="rounded-full bg-white text-black px-5 py-3 font-semibold">Send request</button>
              {sent && <p className="text-sm text-white/70">{sent}</p>}
            </form>
          </div>
          <div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-sm text-white/60">Trusted by teams who value privacy and reliability</div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-12 rounded-lg bg-white/10" />
                <div className="h-12 rounded-lg bg-white/10" />
                <div className="h-12 rounded-lg bg-white/10" />
              </div>
              <div className="mt-6 text-sm text-white/70 italic">“Helping you reclaim time with calm, private, intelligent systems.”</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => { api.posts().then(setPosts).catch(() => {}) }, [])
  return (
    <section id="blog" className="bg-[#0b0c10] text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Insights</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.map(post => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once: true }} transition={{ duration:.4 }} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="text-xs text-white/60">{post.category} • {post.reading_time}</div>
              <div className="mt-2 text-lg font-semibold">{post.title}</div>
              <div className="text-white/70 text-sm mt-1">{post.preview}</div>
              <button className="mt-4 text-sm text-sky-300 inline-flex items-center gap-1">Read more <ArrowRight size={14} /></button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#0b0c10] text-white py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">FreeDAIY</div>
            <p className="text-white/60 text-sm mt-1">Helping you reclaim time with calm, private, intelligent systems.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#downloads" className="text-white/80 hover:text-white">Free Resources</a>
            <a href="#products" className="text-white/80 hover:text-white">Digital Products</a>
            <a href="#hire" className="text-white/80 hover:text-white">Hire Us</a>
            <a href="#blog" className="text-white/80 hover:text-white">Blog</a>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="flex gap-3">
            <input placeholder="Your email" className="rounded-full bg-white/10 border border-white/20 px-4 py-2 placeholder-white/50" />
            <button className="rounded-full bg-white text-black px-4 py-2 font-semibold">Join</button>
          </form>
        </div>
        <div className="text-white/40 text-xs mt-8">© {new Date().getFullYear()} FreeDAIY. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-[#0b0c10] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <DeepDive />
      <Downloads />
      <Products />
      <Hire />
      <Blog />
      <Footer />
    </div>
  )
}
