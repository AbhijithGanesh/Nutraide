import supabase from "@/supabase/profile";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Define the interface for the data you want to store
interface UserData {
  age: number;
  weight: number;
  height: number;
  gender: "male" | "female";
  loaded?: boolean;
}

// Store the user data in Supabase
async function storeUserData(data: UserData) {
  let formData = data;
  formData["loaded"] = true;
  const { data: savedData, error } = await supabase
    .from("user_data")
    .insert(formData);
  if (error) {
    console.error(error);
  } else {
    console.log(savedData);
  }
}

let DetailsPage = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserData>({
    age: 0,
    weight: 0,
    height: 0,
    gender: "male",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    storeUserData(formData);
  }

  let getCurrentSession = async () => {
    const { data: session, error } = await supabase.auth.getSession();

    if (error) {
      console.error(error);
      return null;
    }

    return session;
  };

  useEffect(() => {
    async function fetchData() {
      const session = await getCurrentSession();
      if (session?.session) {
        setAuthState(true);
      }
    }
  }, []);

  // Handle form input changes
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  if (!authState) {
    useEffect(() => {
      router.push('/users/login');
    }, []);
  }

  return (
    <section className="flex justify-center items-center h-screen bg-gray-900">
      <section className="bg-gray-700 p-4 rounded-lg w-2/5">
        <form onSubmit={handleSubmit}>
          <section className="mb-4">
            <label
              htmlFor="patient_age"
              className="block text-white font-semibold mb-2"
            >
              Age
            </label>
            <input
              id="patient_age"
              name="patient_age"
              className="form-select block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
              value={formData.age}
            ></input>
          </section>
          <section className="mb-4">
            <label
              htmlFor="patient_gender"
              className="block text-white font-semibold mb-2"
            >
              Gender
            </label>
            <input
              id="patient_gender"
              name="patient_gender"
              className="form-select block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
              value={formData.gender}
            ></input>
          </section>
          <section className="mb-4">
            <label
              htmlFor="height"
              className="block text-white font-semibold mb-2"
            >
              Height (cm)
            </label>
            <input
              type="string"
              id="height"
              name="height"
              className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
              value={formData.height}
            />
          </section>
          <section className="mb-4">
            <label
              htmlFor="weight"
              className="block text-white font-semibold mb-2"
            >
              Weight (kg)
            </label>
            <input
              type="string"
              id="weight"
              name="weight"
              className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
              onChange={handleChange}
              value={formData.weight}
            />
          </section>
          <section className="flex justify-end">
            <button
              className="px-6 py-2 bg-[#E5E7EB] w-fit  p-12 hover:translate-y-1 rounded-lg text-black font-semibold hover:bg-slate-300 focus:bg-gray-800 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </section>
        </form>
      </section>
    </section>
  );
};

export default DetailsPage;
