import SettingSection from "../settings/SettingSection";
import ToggleSwitch from "../settings/ToggleSwitch";
import { useState } from "react";

const UserInfo = () => {
  
  const [DietPlan, setDietPlan] = useState({
      Cal: true,
      Dairy: false,
      Gluten: false,
      Keto: false,
      Vegan: false,
      Vegetarian: false,
    });

  return(
    <SettingSection icon={null} title={"Diet (temp.)"} className = 'grid grid-col-1 '>
			<ToggleSwitch
      label={"Calorie tracker"}
      isOn={DietPlan.Cal}
      onToggle={() => setDietPlan({...DietPlan, Cal: !DietPlan.Cal} )}
      />
      <ToggleSwitch
      label={"Dairy-Free"}
      isOn={DietPlan.Dairy}
      Toggle={() => setDietPlan({...DietPlan, Dairy: !DietPlan.Dairy} )}
      />
      <ToggleSwitch
      label={"Gluten Free"}
      isOn={DietPlan.Gluten}
      Toggle={() => setDietPlan({...DietPlan, Gluten: !DietPlan.Gluten} )}
      />
      <ToggleSwitch
      label={"Keto"}
      isOn={DietPlan.Keto}
      Toggle={() => setDietPlan({...DietPlan, Keto: !DietPlan.Keto} )}
      />
      <ToggleSwitch
      label={"Vegan"}
      isOn={DietPlan.Vegan}
      Toggle={() => setDietPlan({...DietPlan, Vegan: !DietPlan.Vegan} )}
      />
      <ToggleSwitch
      label={"Vegetarian"}
      isOn={DietPlan.Vegetarian}
      Toggle={() => setDietPlan({...DietPlan, Vegetarian: !DietPlan.Vegetarian} )}
      />
      
      
		</SettingSection>
  );
};
export default UserInfo