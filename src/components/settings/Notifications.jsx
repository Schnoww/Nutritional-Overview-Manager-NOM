import { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
	const [notifications, setNotifications] = useState({
		push: false,
		email: false,
		sms: false,
	});

	return (
		<SettingSection icon={Bell} title={"Notifications"}>
			<ToggleSwitch
				label={"Push Notifications"}
				isOn={notifications.push}
				onToggle={() => setNotifications(notifications?.push )}
			/>
			<ToggleSwitch
				label={"Email Notifications"}
				isOn={notifications.email}
				onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
			/>
			<ToggleSwitch
				label={"SMS Notifications"}
				isOn={notifications.sms}
				onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
			/>
		</SettingSection>
	);
};
export default Notifications;
