import BackButton from "../components/backbutton";

export default function Terms() {
  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl font-bold my-4 text-teal-700 dark:text-teal-300">ShiftSnap Terms and Conditions</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Last Updated: [Date]</p>

      <div className="text-gray-700 dark:text-gray-300 space-y-4">
        <p>Welcome to ShiftSnap! These Terms and Conditions ("Terms") govern your use of ShiftSnap ("App"), a mobile application developed to help users manage and track their working hours and shifts efficiently.</p>

        <p>By downloading, accessing, or using ShiftSnap, you agree to comply with these Terms. If you do not agree to these Terms, please do not use ShiftSnap.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">1. Use of the App</h2>
        <p>ShiftSnap provides tools for managing and tracking work shifts, including punch-in/punch-out functionality, shift summaries, earnings calculation, and recent activity logs. The App is intended solely for personal use. You may not use ShiftSnap for any illegal or unauthorized purpose.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">2. Account Registration and Security</h2>
        <p>To use certain features, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update your information as necessary. You are responsible for safeguarding your password. ShiftSnap cannot be held liable for any loss or damage arising from unauthorized access to your account due to your failure to secure your credentials.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">3. Privacy Policy</h2>
        <p>Your privacy is important to us. Please refer to our Privacy Policy [link to policy] for details on how we collect, use, and disclose information.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">4. Intellectual Property</h2>
        <p>ShiftSnap and its entire content, features, and functionality (including but not limited to information, software, text, images, and the design) are owned by ShiftSnap or its licensors. You may not reproduce, distribute, modify, or create derivative works of any part of the App unless expressly authorized by ShiftSnap.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">5. Prohibited Activities</h2>
        <p>You agree not to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Misuse the punch-in/punch-out or time-tracking functionality for any purpose other than tracking actual working hours.</li>
          <li>Disrupt or interfere with the security or functionality of ShiftSnap.</li>
          <li>Attempt to gain unauthorized access to other users' accounts.</li>
          <li>Use ShiftSnap in any way that could disable, overburden, damage, or impair the App’s functionality.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">6. Disclaimer of Warranties</h2>
        <p>ShiftSnap is provided "as is" and "as available," without any warranties, express or implied. While we aim to provide accurate and reliable functionality, we make no guarantee that ShiftSnap will always operate error-free, be secure, or meet your specific needs.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">7. Limitation of Liability</h2>
        <p>In no event shall ShiftSnap or its affiliates be liable for any indirect, incidental, special, or consequential damages, including loss of data or profits, arising out of or related to your use of the App. ShiftSnap’s total liability, whether in contract, warranty, or tort, shall not exceed the amount paid by you, if any, to access or use ShiftSnap.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">8. Termination</h2>
        <p>ShiftSnap reserves the right to suspend or terminate your access to the App if you violate these Terms or engage in conduct that ShiftSnap deems harmful to its interests or other users. You may delete your account and discontinue using ShiftSnap at any time.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">9. Modifications to Terms</h2>
        <p>ShiftSnap reserves the right to update or modify these Terms at any time. We will notify users of significant changes by posting the new Terms on the App. By continuing to use ShiftSnap after any such changes, you agree to be bound by the modified Terms.</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">10. Governing Law</h2>
        <p>These Terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these Terms shall be resolved in the courts of [Your Country/State].</p>

        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">11. Contact Us</h2>
        <p>If you have any questions or concerns regarding these Terms or ShiftSnap, please contact us at [support@shiftsnap.com].</p>
      </div>
    </div>
  );
}
