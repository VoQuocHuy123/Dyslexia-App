interface WordChipProps {
  word: string;
  definition?: string;
}

export function WordChip({ word, definition }: WordChipProps) {
  return (
    <div className="flex-shrink-0 px-9 py-7 bg-[#FFFCF2] rounded-3xl border-2 border-[#E8DCC8] hover:shadow-lg transition-all cursor-pointer min-w-[200px]">
      <p className="text-[#111111] mb-2">{word}</p>
      {definition && <p className="text-[#555555] mt-2">{definition}</p>}
    </div>
  );
}
