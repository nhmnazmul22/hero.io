const FactInfo = ({ fact }) => {
  return (
    <div className="space-y-4">
      <p className="text-base text-gray-300">{fact.title}</p>
      <h4 className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold">{fact.factNum}</h4>
      <p className="text-base text-gray-300">{fact.shortDes}</p>
    </div>
  );
};

export default FactInfo;
