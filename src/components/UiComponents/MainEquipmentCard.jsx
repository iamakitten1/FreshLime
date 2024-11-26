export default function MainEquipmentCard({ image, features, highlightTitle, cardTitle }) {
  return (
    <div>
      <EquipmentCard
        img={image}
        dataObj={features}
        greenTiTle={highlightTitle}
        title={cardTitle}
      />
    </div>
  );
}


