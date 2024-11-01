import BackButton from "../components/backbutton";


export default function PrivacyPolicy() {
    

    return (
        <div>
            <BackButton />
        
        <div className="p-6 max-w-2xl mx-auto text-gray-800 dark:text-gray-300">
          
            <h1 className="text-3xl font-bold mb-4 text-teal-700 dark:text-teal-300">
                Privacy Policy
            </h1>
            <p className="mb-4">
                **Last Updated**: [Date]
            </p>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                1. Introduction
            </h2>
            <p className="mb-4">
                Welcome to ShiftSnap! This Privacy Policy explains how ShiftSnap ("we," "our," or "us") collects, uses, and shares information when you use our mobile application ("App"). By using ShiftSnap, you agree to the terms outlined in this policy.
            </p>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                2. Information We Collect
            </h2>
            <p className="mb-4">
                To provide a personalized experience and essential functionality, ShiftSnap may collect certain types of information from you:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>Account Information</strong>: When you register, we collect information such as your name, email address, and profile picture to create and manage your account.
                </li>
                <li>
                    <strong>Usage Data</strong>: We collect data on how you interact with the App (e.g., logging shift hours, usage frequency) to improve app performance and user experience.
                </li>
                <li>
                    <strong>Device Information</strong>: This includes information about your device type, operating system, unique device identifiers, and app version to ensure compatibility and improve functionality.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                3. How We Use Your Information
            </h2>
            <p className="mb-4">
                We may use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                    <strong>To Provide Services</strong>: Information helps us enable core features like punch-in/punch-out, shift tracking, and earnings calculation.
                </li>
                <li>
                    <strong>Personalization</strong>: Your information allows us to tailor the app experience to your preferences.
                </li>
                <li>
                    <strong>App Improvement</strong>: Data we collect helps us understand usage patterns to make app improvements.
                </li>
            </ul>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                4. Sharing Your Information
            </h2>
            <p className="mb-4">
                We do not share your information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
            </p>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                5. Your Choices
            </h2>
            <p className="mb-4">
                You can manage your account information and update your preferences within the App’s settings.
            </p>

            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                6. Contact Us
            </h2>
            <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@shiftsnap.com" className="text-blue-500 hover:underline">support@shiftsnap.com</a>.
            </p>
            </div>
        </div>
    );
}
