import Link from 'next/link'
import Image from 'next/image'

interface Breadcrumb {
	label: string
	href?: string
}

interface PageHeaderProps {
	title: string
	image?: string
	breadcrumbs?: Breadcrumb[]
}

export default function PageHeader({ title, image, breadcrumbs }: PageHeaderProps) {
	const crumbs: Breadcrumb[] = breadcrumbs && breadcrumbs.length > 0
		? breadcrumbs
		: [{ label: 'Home', href: '/' }, { label: title }]

	if (image) {
		return (
			<div className="relative h-[300px] md:h-[380px] overflow-hidden">
				<Image src={image} alt={title} fill style={{ objectFit: 'cover' }} priority />
				<div className="absolute inset-0 bg-gray-900/60" />
				<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center text-white">
					<nav className="text-sm mb-3">
						{crumbs.map((c, i) => (
							<span key={i}>
								{c.href ? (
									<Link href={c.href} className="hover:underline">{c.label}</Link>
								) : (
									<span>{c.label}</span>
								)}
								{i < crumbs.length - 1 && <span className="mx-2">/</span>}
							</span>
						))}
					</nav>
					<h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
				</div>
			</div>
		)
	}

	return (
		<div className="bg-gray-200 border-b">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<nav className="text-sm text-gray-600 mb-6">
					{crumbs.map((c, i) => (
						<span key={i}>
							{c.href ? (
								<Link href={c.href} className="hover:text-gray-800">{c.label}</Link>
							) : (
								<span className="text-gray-800">{c.label}</span>
							)}
							{i < crumbs.length - 1 && <span className="mx-2">/</span>}
						</span>
					))}
				</nav>
				<h1 className="text-4xl font-bold text-gray-900">{title}</h1>
			</div>
		</div>
	)
}


