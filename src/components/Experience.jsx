import { experience } from '../data/experience'
import { formatOngoingPeriod } from '../utils/duration'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <p className="section__kicker">// experiência</p>
        <h2 className="section__title">Trajetória profissional</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role + job.company} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <span className="timeline__period">
                    {job.current ? formatOngoingPeriod(job.startDate) : job.period}
                  </span>
                </div>
                <p className="timeline__company">
                  {job.company} <span className="hero__sep">·</span> {job.type}
                </p>
                <p className="timeline__location">{job.location}</p>
                <p className="timeline__summary">{job.summary}</p>
                <ul className="timeline__highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
