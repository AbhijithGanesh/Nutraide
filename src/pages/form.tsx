import React, { useState } from "react";

interface FormData {
  patient_gender: "male" | "female";
  height: number;
  weight: number;
  haemoglobin: number;
  urea: number;
  creatinine: number;
  sodium: number;
  potassium: number;
  fbs: number;
  hba1c: number;
  sgot: number;
  sgpt: number;
}

const ExampleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    patient_gender: "male",
    height: 0,
    weight: 0,
    haemoglobin: 0,
    urea: 0,
    creatinine: 0,
    sodium: 0,
    potassium: 0,
    fbs: 0,
    hba1c: 0,
    sgot: 0,
    sgpt: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const submitForm = async (formData: FormData) => {
    try {
      const response = await fetch(
        "https://us-central1-augmented-axe-380213.cloudfunctions.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      alert(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="p-4 bg-gray-900 min-h-screen w-full flex items-center justify-center">
      <form
        className="bg-gray-700 rounded-lg p-8 w-1/2"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-black mb-6 text-white">
          Patient Information
        </h1>
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
            value={formData.patient_gender+"/female"}
          >
          </input>
        </section>
        <section className="mb-4">
          <label
            htmlFor="height"
            className="block text-white font-semibold mb-2"
          >
            Height (cm)
          </label>
          <input
            type="number"
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
            type="number"
            id="weight"
            name="weight"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.weight}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="haemoglobin"
            className="block text-white font-semibold mb-2"
          >
            Haemoglobin (g/dL)
          </label>
          <input
            type="number"
            id="haemoglobin"
            name="haemoglobin"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.haemoglobin}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="urea" className="block text-white font-semibold mb-2">
            Urea (mg/dL)
          </label>
          <input
            type="number"
            id="urea"
            name="urea"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.urea}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="creatinine"
            className="block text-white font-semibold mb-2"
          >
            Creatinine (mg/dL)
          </label>
          <input
            type="number"
            id="creatinine"
            name="creatinine"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.creatinine}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="sodium"
            className="block text-white font-semibold mb-2"
          >
            Sodium (mEq/L)
          </label>
          <input
            type="number"
            id="sodium"
            name="sodium"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.sodium}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="potassium"
            className="block text-white font-semibold mb-2"
          >
            Potassium (mEq/L)
          </label>
          <input
            type="number"
            id="potassium"
            name="potassium"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.potassium}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="fbs" className="block text-white font-semibold mb-2">
            Fasting Blood Sugar (mg/dL)
          </label>
          <input
            type="number"
            id="fbs"
            name="fbs"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.fbs}
          />
        </section>
        <section className="mb-4">
          <label
            htmlFor="hba1c"
            className="block text-white font-semibold mb-2"
          >
            HbA1c (%)
          </label>
          <input
            type="number"
            id="hba1c"
            name="hba1c"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.hba1c}
          />
        </section>
        <section className="mb-4">
          <label htmlFor="sgot" className="block text-white font-semibold mb-2">
            SGOT (U/L)
          </label>
        </section>
        <input
          type="number"
          id="sgot"
          name="sgot"
          className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          onChange={handleChange}
          value={formData.sgot}
        />
        <section className="mb-4">
          <label
            htmlFor="sgpt"
            className="block text-white font-semibold mb-2 py-2"
          >
            SGPT (U/L)
          </label>
          <input
            type="number"
            id="sgpt"
            name="sgpt"
            className="form-input block w-full px-4 py-2 rounded-lg bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            onChange={handleChange}
            value={formData.sgpt}
          />
        </section>
        <section className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 w-full p-12 hover:translate-y-1 rounded-lg text-white font-semibold hover:bg-gray-800 focus:bg-gray-800 focus:outline-none"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              submitForm(formData);
              event.preventDefault();
            }}
          >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};

export default ExampleForm;
