import { useMemo } from "react";

const HexMapIcon = ({ hexMap, propOverflow, propMaxHeight }) => {
  const hexMapIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      maxHeight: propMaxHeight,
    };
  }, [propOverflow, propMaxHeight]);

  return (
    <img
      className="w-full h-full max-w-full overflow-hidden max-h-full z-[3] object-contain absolute left-[0rem] top-[5.63rem] [transform:scale(1.238)]"
      alt=""
      src={hexMap}
      style={hexMapIconStyle}
    />
  );
};

export default HexMapIcon;
