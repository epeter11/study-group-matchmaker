import { useState } from "react";
import type { Profile } from "../types/profile";

function ProfileForm() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    major: "",
    year: "",
    classes: [],
    locations: [],
  });

  const [classInput, setClassInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  function addItem(
    value: string,
    field: "classes" | "locations",
    reset: () => void
  ) {
    if (!value.trim()) return;
    setProfile((prev) => ({
      ...prev,
      [field]: [...prev[field], value.trim()],
    }));
    reset();
  }

  return (
    <form className="space-y-6 max-w-xl">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) =>
            setProfile({ ...profile, name: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Major */}
      <div>
        <label className="block text-sm font-medium mb-1">Major</label>
        <input
          type="text"
          value={profile.major}
          onChange={(e) =>
            setProfile({ ...profile, major: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium mb-1">Year</label>
        <select
          value={profile.year}
          onChange={(e) =>
            setProfile({ ...profile, year: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select year</option>
          <option>Freshman</option>
          <option>Sophomore</option>
          <option>Junior</option>
          <option>Senior</option>
          <option>Graduate</option>
        </select>
      </div>

      {/* Classes */}
      <div>
        <label className="block text-sm font-medium mb-1">Classes</label>
        <div className="flex gap-2">
          <input
            value={classInput}
            onChange={(e) => setClassInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
            placeholder="e.g. CS220"
          />
          <button
            type="button"
            onClick={() =>
              addItem(classInput, "classes", () => setClassInput(""))
            }
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {profile.classes.map((c) => (
            <span
              key={c}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Preferred Study Locations
        </label>
        <div className="flex gap-2">
          <input
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
            placeholder="e.g. Library"
          />
          <button
            type="button"
            onClick={() =>
              addItem(locationInput, "locations", () =>
                setLocationInput("")
              )
            }
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {profile.locations.map((l) => (
            <span
              key={l}
              className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
