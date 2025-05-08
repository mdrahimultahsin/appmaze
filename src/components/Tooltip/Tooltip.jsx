const Tooltip = ({content, children}) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute -left-7 md:-left-0 lg:left-2 -bottom-12 -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1 rounded-md bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-normal break-words z-50">
        {content}
      </div>
    </div>
  );
};
export default Tooltip;
