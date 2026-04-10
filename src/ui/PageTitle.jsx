function PageTitle({ title, subtitle, className = "" }) {
  return (
    <div className={className}>
      <h1 className="text-4xl font-semibold text-white">{title}</h1>
      {subtitle && <p className="mt-2 text-base text-slate-300">{subtitle}</p>}
    </div>
  );
}

export default PageTitle;
