export default function ProjectDetails({ project }) {
  return (
    <div>
      <span className="text-sm text-cyan uppercase tracking-widest">
        {project.year} · {project.role}
      </span>
      <h3 className="font-display text-3xl font-semibold mt-3">{project.title}</h3>
      <p className="text-ink-muted mt-4 leading-relaxed">{project.longDescription}</p>

      <div className="mt-6">
        <p className="text-sm text-ink-muted uppercase tracking-widest mb-3">Highlights</p>
        <ul className="space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex gap-3 text-ink">
              <span className="text-cyan">▹</span> {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-ink-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <a href={project.live} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-violet to-cyan text-bg text-sm font-medium">
          Live demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/15 text-sm">
          Source code
        </a>
      </div>
    </div>
  );
}