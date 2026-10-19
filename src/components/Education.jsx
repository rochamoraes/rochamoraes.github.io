import { education } from '../data/education'

export default function Education() {
  return (
    <section id="formacao" className="section section--alt">
      <div className="container">
        <p className="section__kicker">{'// formação'}</p>
        <h2 className="section__title">Formação acadêmica</h2>

        <ul className="education__grid">
          {education.map((course) => (
            <li key={course.degree} className="education__card">
              <div className="education__meta">
                <span className="education__period">{course.period}</span>
                {course.current && <span className="education__status">Em andamento</span>}
              </div>
              <h3>{course.degree}</h3>
              <p className="education__institution">{course.institution}</p>
              <p className="education__summary">{course.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
