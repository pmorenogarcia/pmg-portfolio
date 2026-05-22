export function Terminal({ children, host = 'pol@portfolio:~' }) {
  return (
    <div className="term">
      <div className="bar">
        <div className="dots"><i /><i /><i /></div>
        <span>{host}</span>
      </div>
      <div className="body">{children}</div>
    </div>
  );
}
