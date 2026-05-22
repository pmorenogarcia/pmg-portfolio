export function SectionHead({ num, title }) {
  const [n, label] = num.split(' / ');
  return (
    <div className="sec-head">
      <h2 className="big-num">
        {n}<span className="slash">/</span>{label}
      </h2>
      {title && <span className="sub">// {title}</span>}
    </div>
  );
}
