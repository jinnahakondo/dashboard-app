import { Video } from "lucide-react";
import BtnGradient from "../buttons/BtnGradient";

export default function ReminderCard() {
  return (
    <div className=" bg-base-100 rounded-2xl p-5">
      <div className="">
        {/* Title */}
        <h2 className="font-semibold text-lg mb-6 ">Reminders</h2>

        {/* Meeting Title */}
        <p className="text-2xl font-semibold text-green-900 leading-tight mb-2">
          Meeting with Arc Company
        </p>

        {/* Time */}
        <p className="text-sm text-base-content/60 mb-4">
          Time : 02.00 pm - 04.00 pm
        </p>

        {/* Button */}
        <BtnGradient className={"btn-md w-full"}>
          <Video size={30} />
          Start Meeting
        </BtnGradient>
      </div>
    </div>
  );
}
