export default function SkillChip({ skill, bordered, small }) {
  return (
    <span
      className={`rounded-full 
        ${small ? "text-xs px-2 py-[0.85]" : "text-sm px-3 py-1"}
        ${
          bordered
            ? "bg-transparent border-1 border-primary text-primary"
            : "bg-secondary border-0 text-secondary-background"
        }`}
    >
      {skill}
    </span>
  );
}
