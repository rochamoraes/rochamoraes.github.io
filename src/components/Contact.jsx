import { MailIcon, WhatsAppIcon, LinkedInIcon, GitHubIcon } from './icons'

const CONTACTS = [
  {
    label: 'E-mail',
    value: 'contato@rochamoraes.digital',
    href: 'mailto:contato@rochamoraes.digital',
    Icon: MailIcon,
  },
  {
    label: 'WhatsApp',
    value: '(61) 98255-3643',
    href: 'https://wa.me/5561982553643',
    Icon: WhatsAppIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rochamoraes',
    href: 'https://www.linkedin.com/in/rochamoraes',
    Icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/rochamoraes',
    href: 'https://github.com/rochamoraes',
    Icon: GitHubIcon,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="section section--alt">
      <div className="container contact">
        <p className="section__kicker">// contato</p>
        <h2 className="section__title">Vamos conversar?</h2>
        <p className="contact__pitch">
          Aberto a trocar uma ideia sobre qualidade de software, automação ou arquitetura de
          APIs. Fico à disposição pelos canais abaixo.
        </p>

        <div className="contact__grid">
          {CONTACTS.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              className="contact__card"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact__icon">
                <Icon width="22" height="22" />
              </span>
              <span className="contact__text">
                <span className="contact__label">{label}</span>
                <span className="contact__value">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
