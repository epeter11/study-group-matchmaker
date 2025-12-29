import Layout from "../components/Layout";
import AvailabilityGrid from "../components/AvailabilityGrid";

function Profile() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">
        Find Your Perfect Study Group
      </h1>
      <p className="text-gray-600">
        Match with students based on classes, availability, and study preferences.
      </p>

      <AvailabilityGrid />
      
    </Layout>
  );
}

export default Profile;
