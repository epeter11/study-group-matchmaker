import Layout from "../components/Layout";
import ProfileForm from "../components/ProfileForm";
import AvailabilityGrid from "../components/AvailabilityGrid";

function Profile() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-2">Your Profile</h1>
      <p className="text-gray-600 mb-6">
        Tell us about yourself so we can find the best study matches.
      </p>

      <ProfileForm />

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Availability</h2>
        <AvailabilityGrid />
      </div>
    </Layout>
  );
}

export default Profile;
