import { parisienne } from "@/components/fonts";
import PushNotifications from "@/components/notification/PushNotifications";

export default function NotificationSection() {
  return (
    <div className="text-center px-4 pt-24 pb-24">
      <h1
        className={`text-6xl md:text-7xl tracking-tight text-foreground drop-shadow-md z-10 relative text-center ${parisienne.className}`}
      >
        Stay in the loop
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm mb-6">
        Would you like to receive gentle reminders and thoughtful updates as our
        wedding day draws near? We’d love to keep you in the loop as we count
        down to “I do.”
      </p>
      <PushNotifications />
    </div>
  );
}
