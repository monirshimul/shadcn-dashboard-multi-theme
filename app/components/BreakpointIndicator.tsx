// components/BreakpointIndicator.tsx
const breakpoints = [
    { label: 'sm', className: 'sm:hidden' },
    { label: 'md', className: 'md:hidden' },
    { label: 'lg', className: 'lg:hidden' },
    { label: 'xl', className: 'xl:hidden' },
    { label: '2xl', className: '2xl:hidden' },
];

export default function BreakpointIndicator() {
    return (
        <div className="fixed bottom-2 right-2 z-[9999] flex gap-1 text-xs text-white">
            {breakpoints.map((bp) => (
                <div
                    key={bp.label}
                    className={`${bp.className} bg-gray-800 rounded px-2 py-1`}
                >
                    {bp.label}
                </div>
            ))}
        </div>
    );
}
