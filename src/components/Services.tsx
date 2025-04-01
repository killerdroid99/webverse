import ServiceCard from "./ServiceCard"

const serviceCards = [
  {
    id: 1,
    CardTitle: 'Website Development',
    CardDescription: 'Custom websites built with modern technologies that are fast, responsive, and optimized for search engines.',
    CardLink: '#',
    CardIcon: 'fas fa-laptop-code',
  },
  {
    id: 2,
    CardTitle: 'E-Commerce Solutions',
    CardDescription: 'Powerful online stores with secure payment gateways, inventory management, and seamless checkout experiences.',
    CardLink: '#',
    CardIcon: 'fas fa-shopping-cart',
  },
  {
    id: 3,
    CardTitle: 'App Development',
    CardDescription: 'Cross-platform mobile applications that provide a native experience on both iOS and Android devices.',
    CardLink: '#',
    CardIcon: 'fas fa-mobile-alt',
  },
  {
    id: 4,
    CardTitle: 'SEO Optimization',
    CardDescription: 'Improve your search rankings and organic traffic with our comprehensive SEO strategies.',
    CardLink: '#',
    CardIcon: 'fas fa-search',
  },
  {
    id: 5,
    CardTitle: 'UI/UX Design',
    CardDescription: 'User-centered design that focuses on creating intuitive, engaging experiences that convert visitors.',
    CardLink: '#',
    CardIcon: 'fas fa-paint-brush',
  },
  {
    id: 6,
    CardTitle: 'Website Maintenance',
    CardDescription: 'Keep your website secure, up-to-date, and performing at its best with our maintenance services.',
    CardLink: '#',
    CardIcon: 'fas fa-server',
  }
]

const Services = () => {
  return (
    <>
      {
        serviceCards.map(card => (
          <ServiceCard key={card.id} {...card} />
        ))
      }
    </>
  )
}

export default Services
