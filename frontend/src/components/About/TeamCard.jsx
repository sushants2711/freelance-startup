export default function TeamCard({ member }) {
  return (
    <div className="flex items-center gap-[16px] bg-[#fdfdfd] border border-[var(--line-lt-strong)] p-[20px] rounded-[8px]">
      <div className="w-[56px] h-[56px] rounded-full bg-ink text-gold flex items-center justify-center font-mono font-bold text-[1.2rem] shrink-0 shadow-md">
        {member.initials}
      </div>
      <div>
        <h4 className="m-0 text-[1.1rem] font-bold text-ink leading-tight">
          {member.name}
        </h4>
        <p className="m-0 mt-[4px] text-[0.85rem] font-mono text-slate-lt uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </div>
  );
}
