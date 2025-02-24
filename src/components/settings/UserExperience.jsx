import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react"; // Removed unused import Navigation
import ToggleSwitch from "./ToggleSwitch";

const UserExperience = () => {
    const [notifications, setNotifications] = useState({
        "Seizure Safe Profile": false,
        "Vision Impaired Profile": false,
        "Cognitive Disability Profile": true,
        "ADHD Friendly Profile": false,
        "Blind Users (Screen Reader)": false,
        "Keyboard Navigation (Motor)": false,
    });

    const handleToggle = (profile) => {
        setNotifications({
            ...notifications,
            [profile]: !notifications[profile], // Dynamically update the specific profile
        });
    };

    return (
        <SettingSection icon={Bell} title={"Accessibility Profiles"}>
            <ToggleSwitch
                label={"Seizure Safe Profile"}
                isOn={notifications["Seizure Safe Profile"]}
                onToggle={() => handleToggle("Seizure Safe Profile")}
            />
            <ToggleSwitch
                label={"Vision Impaired Profile"}
                isOn={notifications["Vision Impaired Profile"]}
                onToggle={() => handleToggle("Vision Impaired Profile")}
            />
            <ToggleSwitch
                label={"Cognitive Disability Profile"}
                isOn={notifications["Cognitive Disability Profile"]}
                onToggle={() => handleToggle("Cognitive Disability Profile")}
            />
            <ToggleSwitch
                label={"ADHD Friendly Profile"}
                isOn={notifications["ADHD Friendly Profile"]}
                onToggle={() => handleToggle("ADHD Friendly Profile")}
            />
            <ToggleSwitch
                label={"Blind Users (Screen Reader)"}
                isOn={notifications["Blind Users (Screen Reader)"]}
                onToggle={() => handleToggle("Blind Users (Screen Reader)")}
            />
            <ToggleSwitch
                label={"Keyboard Navigation (Motor)"}
                isOn={notifications["Keyboard Navigation (Motor)"]}
                onToggle={() => handleToggle("Keyboard Navigation (Motor)")}
            />
        </SettingSection>
    );
};

export default UserExperience;
