import Image from 'next/image'
import Link from 'next/link'

type Crumb = { href: string; label: string }

export default function PageIntro({
  title,
  lead,
  image,
  crumbs,
  crumbLabel = 'Breadcrumb',
  imageAlt = '',
  children,
}: {
  title: string
  lead?: string
  image?: string
  crumbs?: Crumb[]
  crumbLabel?: string
  imageAlt?: string
  children?: React.ReactNode
}) {
  // Phones: title, then photo, then lead text. Desktop: title and lead on the left, photo on the right.
  const col = image ? 'lg:col-span-6' : 'max-w-3xl'
  return (
    <section className="bg-white">
      <div className={`mx-auto max-w-7xl px-5 sm:px-8 py-12 md:py-16 grid gap-y-8 ${image ? 'lg:grid-cols-12 lg:gap-x-10 lg:gap-y-5' : ''}`}>
        <div className={`${col} ${image ? 'lg:self-end' : ''}`}>
          {crumbs && (
            <nav aria-label={crumbLabel} className="mb-5 text-sm text-dlt-muted">
              <ol className="flex flex-wrap gap-2">
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden>/</span>}
                    <Link href={c.href} className="underline-offset-4 hover:underline">{c.label}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.92] tracking-tight">{title}</h1>
        </div>
        {image && (
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 lg:self-center relative aspect-[16/10] rounded-lg overflow-hidden">
            <Image src={image} alt={imageAlt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        )}
        {(lead || children) && (
          <div className={`${col} ${image ? 'lg:self-start' : ''} -mt-3 lg:mt-0`}>
            {lead && <p className="text-lg md:text-xl leading-relaxed max-w-xl text-dlt-muted">{lead}</p>}
            {children}
          </div>
        )}
      </div>
      <div className="h-1.5 lane-dashes" aria-hidden />
    </section>
  )
}
