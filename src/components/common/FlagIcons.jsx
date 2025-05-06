// FlagIcons.jsx
import React from 'react';

const FlagIcons = ({ item }) => {
  return (
    <div className="flag-icons">
      {item.isVegetarian && <span title="Vegetarian">🥦</span>}
      {item.isVegan && <span title="Vegan">🌱</span>}
      {item.isMindful && <span title="Mindful">🧘</span>}
      {item.containsDairy && <span title="Contains Dairy">🥛</span>}
      {item.containsEgg && <span title="Contains Egg">🍳</span>}
      {item.containsWheat && <span title="Contains Wheat">🌾</span>}
      {item.containsSoy && <span title="Contains Soy">🌿</span>}
      {item.containsGluten && <span title="Contains Gluten">🍞</span>}
      {item.containsShellfish && <span title="Contains Shellfish">🦐</span>}
    </div>
  );
};

export default FlagIcons;
