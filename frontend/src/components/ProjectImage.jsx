import React, { useState } from "react";
import { Building2 } from "lucide-react";

export const ProjectImage = ({ src, alt, title, category, className = "", testId }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        data-testid={testId ? `${testId}-placeholder` : undefined}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 text-stone-600 ${className}`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 32px), repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0 1px, transparent 1px 32px)",
        }}
      >
        <Building2 className="w-10 h-10 mb-3 opacity-60" strokeWidth={1.5} />
        <p className="text-sm font-semibold tracking-wide text-center px-6 line-clamp-2">
          {title || alt}
        </p>
        {category && (
          <p className="text-xs uppercase tracking-[0.2em] mt-1 opacity-70">{category}</p>
        )}
      </div>
    );
  }

  return (
    <img
      data-testid={testId}
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};
